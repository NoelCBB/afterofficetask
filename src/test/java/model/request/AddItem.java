package model.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddItem {    
    @JsonProperty("name")
    public String name;

    @JsonProperty("data")
    public Data data;

    public static class Data {
        @JsonProperty("year")
        public String year;

        @JsonProperty("price")
        public String price;

        @JsonProperty("CPU model")
        public String cpumodel;

        @JsonProperty("Hard disk size")
        public String hardDiskSize;
        
    }

}
