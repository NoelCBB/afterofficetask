package apiengine;

import java.util.List;

import org.testng.Assert;

import model.request.AddItem;
import model.response.ResponseItem;

public class Assertion {
    public void assertAddItem(ResponseItem responseItem, AddItem addItem){
        Assert.assertNotNull(responseItem.id);
        Assert.assertEquals(responseItem.data.year, addItem.data.year);
        Assert.assertEquals(responseItem.data.cpumodel, addItem.data.cpumodel);
        Assert.assertEquals(responseItem.data.price, addItem.data.price);
        Assert.assertEquals(responseItem.data.hardDiskSize, addItem.data.hardDiskSize);

    }

    public void assertAvailableItem(List<ResponseItem> gItems, AddItem request, String idObject){
        for (ResponseItem item : gItems) {
            System.out.println("===============");
            if (item.id == idObject) {
                Assert.assertEquals(item.data.year, request.data.year);
                Assert.assertEquals(item.data.price, request.data.price);
                Assert.assertEquals(item.data.cpumodel, request.data.cpumodel);
                Assert.assertEquals(item.data.hardDiskSize, request.data.hardDiskSize);
            }
            System.out.println("===============");
        }
    }
}
