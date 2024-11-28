package stepdefenitions;

import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.testng.Assert;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import apiengine.Assertion;
import apiengine.Endpoints;
import io.cucumber.java.Before;
import io.cucumber.java.an.E;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import model.request.AddItem;
import model.response.ResponseItem;
import resource.DataRequest;

public class StepDefenitions {
    RequestSpecification requestSpecification;
    String idObject;
    private AddItem addItem;
    private ResponseItem responseItem;
    private DataRequest dataRequest;
    private String json;
    private Assertion assertion;
    private Endpoints endpoints;

    @Before
    public void setUp(){
        endpoints = new Endpoints();
    }

    @Given("A list of item are available")
    public void a_list_of_item_are_available() {
        /*
         * Get response dari request 
         */
        Response response = endpoints.getAllItems();

        /*
         * Get response dari request
         * - Status code
         * - Response body
         */
        int statusCode = response.getStatusCode();
        System.out.println("Statuscode : " + statusCode);
        System.out.println("Response: " + response.asPrettyString());
    }

    @When("I add item to list {string}")
    public void i_add_item_to_list(String payload) throws JsonMappingException, JsonProcessingException {
        dataRequest = new DataRequest();

        for(Map.Entry<String, String> entry : dataRequest.addItemCollection().entrySet()){
            if (entry.getKey().equals(payload)) {
                json = entry.getValue();
                break;
            }
        }
        
        // Create ObjectMapper instance
        ObjectMapper objectMapper = new ObjectMapper();
        
        //request
        addItem = objectMapper.readValue(json, AddItem.class);

        Response response = endpoints.addItem(json);

        //response
        JsonPath jsonPath = response.jsonPath();
        responseItem = jsonPath.getObject("", ResponseItem.class);

        assertion = new Assertion();
        assertion.assertAddItem(responseItem, addItem);

        idObject = responseItem.id;
    }

    @Then("The item is available")
    public void the_item_is_available() {
        /*
         * Get response dari request 
         */
        Response response = endpoints.getSpesificItem(idObject);

        /*
         * Get response dari request
         * - Status code
         * - Response body
         */
        int statusCode = response.getStatusCode();
        Assert.assertEquals(statusCode, 200);
        Assert.assertNotEquals(response, 0);
    }

    @Then("I can update item {string}")
    public void i_can_update_that_item(String payload) {
        dataRequest = new DataRequest();

        for(Map.Entry<String, String> entry : dataRequest.updateItemCollection().entrySet()){
            System.out.println("ini hasilnya"+entry.getKey());
            if (entry.getKey().equals(payload)) {
                json = entry.getValue();
                break;
            }
        }

        //Update Item
        endpoints.updateItem(json, idObject);

        //Verify Item
        Response response = endpoints.getSpesificItem(idObject);

        JsonPath jsonPath = response.jsonPath();

        // //Deserialize JSON to Object 
        List<ResponseItem> gItems = jsonPath.getList("", ResponseItem.class);
        assertion.assertAvailableItem(gItems, addItem, idObject);
    }

    @When("I delete that item")
    public void i_delete_that_item() {
         /*
         * Get response dari request 
         */
        Response response = endpoints.deleteItem(idObject);

        /*
         * Get response dari request
         * - Status code
         * - Response body
         */
        int statusCode = response.getStatusCode();
        System.out.println("Statuscode : " + statusCode);
        System.out.println("Response: " + response.asPrettyString());

        //  Create a JSONObject from the string
        JSONObject jsonResponse = new JSONObject(response.asString());

        //Do assertion
        Assert.assertEquals(statusCode, 200);
        Assert.assertEquals("Object with id = "+idObject+" has been deleted.", jsonResponse.getString("message"));
    }

    @Then("The item isn't available")
    public void the_item_isn_t_available() {
       
        /*
         * Get response dari request 
         */
        Response response = endpoints.getSpesificItem(idObject);

        /*
         * Get response dari request
         * - Status code
         * - Response body
         */
        int statusCode = response.getStatusCode();
        System.out.println("Statuscode : " + statusCode);
        System.out.println("Response-deleted: " + response.asPrettyString());


        /*
         * Extract value dari API
         * [
                {
                    "id": "3",
                    "name": "Apple iPhone 12 Pro Max",
                    "data": {
                        "color": "Cloudy White",
                        "capacity GB": 512
                    }
                },
                {
                    "id": "5",
                    "name": "Samsung Galaxy Z Fold2",
                    "data": {
                        "price": 689.99,
                        "color": "Brown"
                    }
                }
            ]
            
            - Get Id, name, data
         */

         //  Create a JSONObject from the string
        JSONObject jsonResponse = new JSONObject(response.asString());

        //Do assertion
        Assert.assertEquals(statusCode, 404);
        Assert.assertEquals("Oject with id="+idObject+" was not found.", jsonResponse.getString("error"));
    }
}
