package com.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Item {
    @JsonProperty("id")
    public String id;

    @JsonProperty("name")
    public String name;

    @JsonProperty("data")
    public Data data;

    public static class Data {
        @JsonProperty("Screen size")
        private String screenSize;
        
        @JsonProperty("price")
        public double price;
    
        @JsonProperty("CPU model")
        public String cpuModel;
    
        @JsonProperty("Hard disk size")
        public String hardDiskSize;
    
        @JsonProperty("color")
        public String color;
    
        @JsonProperty("generation")
        public String generation;
    
        @JsonProperty("Capacity")
        public String capacity;
    
        @JsonProperty("capacity")
        public String capacityItem;
    
        @JsonProperty("capacity GB")
        public String capacityGB;
    
        @JsonProperty("Strap Colour")
        public String strapColor;
    
        @JsonProperty("Case Size")
        public String caseSize;
    
        @JsonProperty("Description")
        public String description;
    
    }
}



