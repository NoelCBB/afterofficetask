Feature: End to End simulation Test
Description: We will test some scenario implement E2E Test

Scenario Outline: As a user I can add new data
    Given A list of item are available
    When I add item to list "<payload>"
    Then The item is available

    Examples:
    |payload    |
    |addItem  |
    |addItem2 |

Scenario Outline: As a user I can update data
    Given A list of item are available
    When I add item to list "<payload>"
    And The item is available
    Then I can update item "<update>"

    Examples:
    |payload    | update        | 
    |addItem    | updateItem    |
    |addItem2   | updateItem2   |

Scenario Outline: As a user I can delete data
    Given A list of item are available
    And I add item to list
    And The item is available "<payload>"
    When I delete that item
    Then The item isn't available    

    Examples:
    |payload    | 
    |addItem    | 
    |addItem2   |