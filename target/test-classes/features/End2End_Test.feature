Feature: End to End simulation Test
Description: We will test some scenario implement E2E Test

@addData
Scenario: As a user I can add new data
    Given A list of item are available
    When I add item to list
    Then The item is available


@updateData @api
Scenario: As a user I can update data
    Given A list of item are available
    When I add item to list
    And The item is available
    Then I can update that item

Scenario: As a user I can delete data
    Given A list of item are available
    And I add item to list
    And The item is available
    When I delete that item
    Then The item isn't available