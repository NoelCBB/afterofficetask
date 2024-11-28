$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/End2End_Test.feature");
formatter.feature({
  "name": "End to End simulation Test",
  "description": "Description: We will test some scenario implement E2E Test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "As a user I can add new data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "A list of item are available",
  "keyword": "Given "
});
formatter.step({
  "name": "I add item to list \"\u003cpayload\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The item is available",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "payload"
      ]
    },
    {
      "cells": [
        "addItem"
      ]
    },
    {
      "cells": [
        "addItem2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a user I can add new data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A list of item are available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.a_list_of_item_are_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add item to list \"addItem\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.i_add_item_to_list(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.RuntimeException: com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException: Unrecognized field \"error\" (class model.response.ResponseItem), not marked as ignorable (4 known properties: \"data\", \"id\", \"name\", \"createdAt\"])\n at [Source: (String)\"{\"error\":\"We are very sorry but you reached your limit of requests per day. Our current limit is equal to 100 requests per day. The reason for that is the fact that servers cost money and 200 requests per user per day is all that we can afford at the moment. Tomorrow the limit will reset and you will be able to continue. Thanks and have a good day!\"}\"; line: 1, column: 11] (through reference chain: model.response.ResponseItem[\"error\"])\n\tat io.restassured.internal.path.json.mapping.JsonPathJackson2ObjectDeserializer.deserialize(JsonPathJackson2ObjectDeserializer.java:30)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserializeWithJackson2(JsonObjectDeserializer.java:93)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserialize(JsonObjectDeserializer.java:53)\n\tat io.restassured.path.json.JsonPath.jsonStringToObject(JsonPath.java:1093)\n\tat io.restassured.path.json.JsonPath.getObject(JsonPath.java:560)\n\tat stepdefenitions.StepDefenitions.i_add_item_to_list(StepDefenitions.java:80)\n\tat ✽.I add item to list \"addItem\"(file:///Users/bytedance/CourseQAAutomation/APIAdvance/apiautomationadvance/src/test/resources/features/End2End_Test.feature:6)\nCaused by: com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException: Unrecognized field \"error\" (class model.response.ResponseItem), not marked as ignorable (4 known properties: \"data\", \"id\", \"name\", \"createdAt\"])\n at [Source: (String)\"{\"error\":\"We are very sorry but you reached your limit of requests per day. Our current limit is equal to 100 requests per day. The reason for that is the fact that servers cost money and 200 requests per user per day is all that we can afford at the moment. Tomorrow the limit will reset and you will be able to continue. Thanks and have a good day!\"}\"; line: 1, column: 11] (through reference chain: model.response.ResponseItem[\"error\"])\n\tat com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException.from(UnrecognizedPropertyException.java:61)\n\tat com.fasterxml.jackson.databind.DeserializationContext.handleUnknownProperty(DeserializationContext.java:1138)\n\tat com.fasterxml.jackson.databind.deser.std.StdDeserializer.handleUnknownProperty(StdDeserializer.java:2224)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializerBase.handleUnknownProperty(BeanDeserializerBase.java:1709)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializerBase.handleUnknownVanilla(BeanDeserializerBase.java:1687)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializer.vanillaDeserialize(BeanDeserializer.java:320)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializer.deserialize(BeanDeserializer.java:177)\n\tat com.fasterxml.jackson.databind.deser.DefaultDeserializationContext.readRootValue(DefaultDeserializationContext.java:323)\n\tat com.fasterxml.jackson.databind.ObjectMapper._readMapAndClose(ObjectMapper.java:4825)\n\tat com.fasterxml.jackson.databind.ObjectMapper.readValue(ObjectMapper.java:3772)\n\tat io.restassured.internal.path.json.mapping.JsonPathJackson2ObjectDeserializer.deserialize(JsonPathJackson2ObjectDeserializer.java:28)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserializeWithJackson2(JsonObjectDeserializer.java:93)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserialize(JsonObjectDeserializer.java:53)\n\tat io.restassured.path.json.JsonPath.jsonStringToObject(JsonPath.java:1093)\n\tat io.restassured.path.json.JsonPath.getObject(JsonPath.java:560)\n\tat stepdefenitions.StepDefenitions.i_add_item_to_list(StepDefenitions.java:80)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:530)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:758)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:453)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:211)\n",
  "status": "failed"
});
formatter.step({
  "name": "The item is available",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.the_item_is_available()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user I can add new data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A list of item are available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.a_list_of_item_are_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add item to list \"addItem2\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.i_add_item_to_list(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.RuntimeException: com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException: Unrecognized field \"error\" (class model.response.ResponseItem), not marked as ignorable (4 known properties: \"data\", \"id\", \"name\", \"createdAt\"])\n at [Source: (String)\"{\"error\":\"We are very sorry but you reached your limit of requests per day. Our current limit is equal to 100 requests per day. The reason for that is the fact that servers cost money and 200 requests per user per day is all that we can afford at the moment. Tomorrow the limit will reset and you will be able to continue. Thanks and have a good day!\"}\"; line: 1, column: 11] (through reference chain: model.response.ResponseItem[\"error\"])\n\tat io.restassured.internal.path.json.mapping.JsonPathJackson2ObjectDeserializer.deserialize(JsonPathJackson2ObjectDeserializer.java:30)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserializeWithJackson2(JsonObjectDeserializer.java:93)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserialize(JsonObjectDeserializer.java:53)\n\tat io.restassured.path.json.JsonPath.jsonStringToObject(JsonPath.java:1093)\n\tat io.restassured.path.json.JsonPath.getObject(JsonPath.java:560)\n\tat stepdefenitions.StepDefenitions.i_add_item_to_list(StepDefenitions.java:80)\n\tat ✽.I add item to list \"addItem2\"(file:///Users/bytedance/CourseQAAutomation/APIAdvance/apiautomationadvance/src/test/resources/features/End2End_Test.feature:6)\nCaused by: com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException: Unrecognized field \"error\" (class model.response.ResponseItem), not marked as ignorable (4 known properties: \"data\", \"id\", \"name\", \"createdAt\"])\n at [Source: (String)\"{\"error\":\"We are very sorry but you reached your limit of requests per day. Our current limit is equal to 100 requests per day. The reason for that is the fact that servers cost money and 200 requests per user per day is all that we can afford at the moment. Tomorrow the limit will reset and you will be able to continue. Thanks and have a good day!\"}\"; line: 1, column: 11] (through reference chain: model.response.ResponseItem[\"error\"])\n\tat com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException.from(UnrecognizedPropertyException.java:61)\n\tat com.fasterxml.jackson.databind.DeserializationContext.handleUnknownProperty(DeserializationContext.java:1138)\n\tat com.fasterxml.jackson.databind.deser.std.StdDeserializer.handleUnknownProperty(StdDeserializer.java:2224)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializerBase.handleUnknownProperty(BeanDeserializerBase.java:1709)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializerBase.handleUnknownVanilla(BeanDeserializerBase.java:1687)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializer.vanillaDeserialize(BeanDeserializer.java:320)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializer.deserialize(BeanDeserializer.java:177)\n\tat com.fasterxml.jackson.databind.deser.DefaultDeserializationContext.readRootValue(DefaultDeserializationContext.java:323)\n\tat com.fasterxml.jackson.databind.ObjectMapper._readMapAndClose(ObjectMapper.java:4825)\n\tat com.fasterxml.jackson.databind.ObjectMapper.readValue(ObjectMapper.java:3772)\n\tat io.restassured.internal.path.json.mapping.JsonPathJackson2ObjectDeserializer.deserialize(JsonPathJackson2ObjectDeserializer.java:28)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserializeWithJackson2(JsonObjectDeserializer.java:93)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserialize(JsonObjectDeserializer.java:53)\n\tat io.restassured.path.json.JsonPath.jsonStringToObject(JsonPath.java:1093)\n\tat io.restassured.path.json.JsonPath.getObject(JsonPath.java:560)\n\tat stepdefenitions.StepDefenitions.i_add_item_to_list(StepDefenitions.java:80)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:530)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:758)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:453)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:211)\n",
  "status": "failed"
});
formatter.step({
  "name": "The item is available",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.the_item_is_available()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "As a user I can update data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "A list of item are available",
  "keyword": "Given "
});
formatter.step({
  "name": "I add item to list \"\u003cpayload\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The item is available",
  "keyword": "And "
});
formatter.step({
  "name": "I can update item \"\u003cupdate\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "payload",
        "update"
      ]
    },
    {
      "cells": [
        "addItem",
        "updateItem"
      ]
    },
    {
      "cells": [
        "addItem2",
        "updateItem2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a user I can update data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A list of item are available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.a_list_of_item_are_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add item to list \"addItem\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.i_add_item_to_list(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.RuntimeException: com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException: Unrecognized field \"error\" (class model.response.ResponseItem), not marked as ignorable (4 known properties: \"data\", \"id\", \"name\", \"createdAt\"])\n at [Source: (String)\"{\"error\":\"We are very sorry but you reached your limit of requests per day. Our current limit is equal to 100 requests per day. The reason for that is the fact that servers cost money and 200 requests per user per day is all that we can afford at the moment. Tomorrow the limit will reset and you will be able to continue. Thanks and have a good day!\"}\"; line: 1, column: 11] (through reference chain: model.response.ResponseItem[\"error\"])\n\tat io.restassured.internal.path.json.mapping.JsonPathJackson2ObjectDeserializer.deserialize(JsonPathJackson2ObjectDeserializer.java:30)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserializeWithJackson2(JsonObjectDeserializer.java:93)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserialize(JsonObjectDeserializer.java:53)\n\tat io.restassured.path.json.JsonPath.jsonStringToObject(JsonPath.java:1093)\n\tat io.restassured.path.json.JsonPath.getObject(JsonPath.java:560)\n\tat stepdefenitions.StepDefenitions.i_add_item_to_list(StepDefenitions.java:80)\n\tat ✽.I add item to list \"addItem\"(file:///Users/bytedance/CourseQAAutomation/APIAdvance/apiautomationadvance/src/test/resources/features/End2End_Test.feature:16)\nCaused by: com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException: Unrecognized field \"error\" (class model.response.ResponseItem), not marked as ignorable (4 known properties: \"data\", \"id\", \"name\", \"createdAt\"])\n at [Source: (String)\"{\"error\":\"We are very sorry but you reached your limit of requests per day. Our current limit is equal to 100 requests per day. The reason for that is the fact that servers cost money and 200 requests per user per day is all that we can afford at the moment. Tomorrow the limit will reset and you will be able to continue. Thanks and have a good day!\"}\"; line: 1, column: 11] (through reference chain: model.response.ResponseItem[\"error\"])\n\tat com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException.from(UnrecognizedPropertyException.java:61)\n\tat com.fasterxml.jackson.databind.DeserializationContext.handleUnknownProperty(DeserializationContext.java:1138)\n\tat com.fasterxml.jackson.databind.deser.std.StdDeserializer.handleUnknownProperty(StdDeserializer.java:2224)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializerBase.handleUnknownProperty(BeanDeserializerBase.java:1709)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializerBase.handleUnknownVanilla(BeanDeserializerBase.java:1687)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializer.vanillaDeserialize(BeanDeserializer.java:320)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializer.deserialize(BeanDeserializer.java:177)\n\tat com.fasterxml.jackson.databind.deser.DefaultDeserializationContext.readRootValue(DefaultDeserializationContext.java:323)\n\tat com.fasterxml.jackson.databind.ObjectMapper._readMapAndClose(ObjectMapper.java:4825)\n\tat com.fasterxml.jackson.databind.ObjectMapper.readValue(ObjectMapper.java:3772)\n\tat io.restassured.internal.path.json.mapping.JsonPathJackson2ObjectDeserializer.deserialize(JsonPathJackson2ObjectDeserializer.java:28)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserializeWithJackson2(JsonObjectDeserializer.java:93)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserialize(JsonObjectDeserializer.java:53)\n\tat io.restassured.path.json.JsonPath.jsonStringToObject(JsonPath.java:1093)\n\tat io.restassured.path.json.JsonPath.getObject(JsonPath.java:560)\n\tat stepdefenitions.StepDefenitions.i_add_item_to_list(StepDefenitions.java:80)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:530)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:758)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:453)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:211)\n",
  "status": "failed"
});
formatter.step({
  "name": "The item is available",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.the_item_is_available()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I can update item \"updateItem\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.i_can_update_that_item(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user I can update data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A list of item are available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.a_list_of_item_are_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add item to list \"addItem2\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.i_add_item_to_list(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.RuntimeException: com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException: Unrecognized field \"error\" (class model.response.ResponseItem), not marked as ignorable (4 known properties: \"data\", \"id\", \"name\", \"createdAt\"])\n at [Source: (String)\"{\"error\":\"We are very sorry but you reached your limit of requests per day. Our current limit is equal to 100 requests per day. The reason for that is the fact that servers cost money and 200 requests per user per day is all that we can afford at the moment. Tomorrow the limit will reset and you will be able to continue. Thanks and have a good day!\"}\"; line: 1, column: 11] (through reference chain: model.response.ResponseItem[\"error\"])\n\tat io.restassured.internal.path.json.mapping.JsonPathJackson2ObjectDeserializer.deserialize(JsonPathJackson2ObjectDeserializer.java:30)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserializeWithJackson2(JsonObjectDeserializer.java:93)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserialize(JsonObjectDeserializer.java:53)\n\tat io.restassured.path.json.JsonPath.jsonStringToObject(JsonPath.java:1093)\n\tat io.restassured.path.json.JsonPath.getObject(JsonPath.java:560)\n\tat stepdefenitions.StepDefenitions.i_add_item_to_list(StepDefenitions.java:80)\n\tat ✽.I add item to list \"addItem2\"(file:///Users/bytedance/CourseQAAutomation/APIAdvance/apiautomationadvance/src/test/resources/features/End2End_Test.feature:16)\nCaused by: com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException: Unrecognized field \"error\" (class model.response.ResponseItem), not marked as ignorable (4 known properties: \"data\", \"id\", \"name\", \"createdAt\"])\n at [Source: (String)\"{\"error\":\"We are very sorry but you reached your limit of requests per day. Our current limit is equal to 100 requests per day. The reason for that is the fact that servers cost money and 200 requests per user per day is all that we can afford at the moment. Tomorrow the limit will reset and you will be able to continue. Thanks and have a good day!\"}\"; line: 1, column: 11] (through reference chain: model.response.ResponseItem[\"error\"])\n\tat com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException.from(UnrecognizedPropertyException.java:61)\n\tat com.fasterxml.jackson.databind.DeserializationContext.handleUnknownProperty(DeserializationContext.java:1138)\n\tat com.fasterxml.jackson.databind.deser.std.StdDeserializer.handleUnknownProperty(StdDeserializer.java:2224)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializerBase.handleUnknownProperty(BeanDeserializerBase.java:1709)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializerBase.handleUnknownVanilla(BeanDeserializerBase.java:1687)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializer.vanillaDeserialize(BeanDeserializer.java:320)\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializer.deserialize(BeanDeserializer.java:177)\n\tat com.fasterxml.jackson.databind.deser.DefaultDeserializationContext.readRootValue(DefaultDeserializationContext.java:323)\n\tat com.fasterxml.jackson.databind.ObjectMapper._readMapAndClose(ObjectMapper.java:4825)\n\tat com.fasterxml.jackson.databind.ObjectMapper.readValue(ObjectMapper.java:3772)\n\tat io.restassured.internal.path.json.mapping.JsonPathJackson2ObjectDeserializer.deserialize(JsonPathJackson2ObjectDeserializer.java:28)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserializeWithJackson2(JsonObjectDeserializer.java:93)\n\tat io.restassured.internal.path.json.mapping.JsonObjectDeserializer.deserialize(JsonObjectDeserializer.java:53)\n\tat io.restassured.path.json.JsonPath.jsonStringToObject(JsonPath.java:1093)\n\tat io.restassured.path.json.JsonPath.getObject(JsonPath.java:560)\n\tat stepdefenitions.StepDefenitions.i_add_item_to_list(StepDefenitions.java:80)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:530)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:758)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:453)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:211)\n",
  "status": "failed"
});
formatter.step({
  "name": "The item is available",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.the_item_is_available()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I can update item \"updateItem2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.i_can_update_that_item(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "As a user I can delete data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "A list of item are available",
  "keyword": "Given "
});
formatter.step({
  "name": "I add item to list",
  "keyword": "And "
});
formatter.step({
  "name": "The item is available \"\u003cpayload\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I delete that item",
  "keyword": "When "
});
formatter.step({
  "name": "The item isn\u0027t available",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "payload"
      ]
    },
    {
      "cells": [
        "addItem"
      ]
    },
    {
      "cells": [
        "addItem2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a user I can delete data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A list of item are available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.a_list_of_item_are_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add item to list",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The item is available \"addItem\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I delete that item",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.i_delete_that_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The item isn\u0027t available",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.the_item_isn_t_available()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user I can delete data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A list of item are available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.a_list_of_item_are_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add item to list",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The item is available \"addItem2\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I delete that item",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.i_delete_that_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The item isn\u0027t available",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.the_item_isn_t_available()"
});
formatter.result({
  "status": "skipped"
});
});