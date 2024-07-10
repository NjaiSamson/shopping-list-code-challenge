# Interactive Shopping List

# Overview

This program is an interactive shopping list application that combines array iteration, DOM manipulation, and event handling to create a dynamic and user-friendly interface. The application allows users to add items to a shopping list, mark items as purchased, and clear the list. The program also includes additional features like editing existing items and persisting data using local storage.

# Features

Major JavaScript Functions used in this program

function renderItemsList()

- Renders the list of items stored in the itemsShoppingList array to the DOM.
- Creates a div for each item with a button to mark it as purchased.
- Updates the DOM to reflect the purchased state of each item.

function addItemToList()

- Captures user input from the input field.
- Adds new items to the itemsShoppingList array.
- Checks for duplicate items and prompts the user for confirmation before adding.
- Calls updateLocalStorage() and renderItemsList() to update the DOM and persist changes.

function editItem(item)

- Allows users to edit the name of existing items in the list.
- Prompts the user for a new name and updates the item in the itemsShoppingList array.
- Calls updateLocalStorage() and renderItemsList() to update the DOM and persist changes.

function clearItemsList()

- Clears all items from the itemsShoppingList array.
- Calls updateLocalStorage() and renderItemsList() to update the DOM and persist changes.

function itemsCheckout()

- Prompts the user to confirm the removal of each item from the list.
- Marks all items as purchased and updates the itemsShoppingList array.
- Calls updateLocalStorage() and renderItemsList() to update the DOM and persist changes.

function updateLocalStorage()

- Persists the itemsShoppingList array to local storage.

# Purpose

The purpose of this program is to provide a simple, interactive shopping list application that allows users to manage their shopping items efficiently. Users can add, edit, and remove items from the list, mark items as purchased, and clear the entire list.

# Usage

Adding Items:

- Enter the item name in the input field and click the "Add" button.
  T- he item will be added to the list and displayed on the page.

Marking Items as Purchased:

- Click the "Mark Purchased" button next to an item. The button will change to "Item Purchased" and the item text will have a strikethrough.

Editing Items:

- Double-click an item to edit its name.
- Enter the new name in the prompt and click "OK".

Clearing the List:

- Click the "Clear List" button to remove all items from the list.

Removing item one by one

- Click "Remove Item" button.
- You will be prompted whether you want to remove the item. If you want to remove the prompted item, click okay but if you wish to maintain the item click cancel to go to the next item. Continue with the prompt until you remove allthe items you want to remove.
