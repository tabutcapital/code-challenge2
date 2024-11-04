CODE CHALLENGE 2

AUTHOR
Ian Kiprotich

HTML File
-The HTML structure provides the basic framework of the page.
-The CSS file, linked in the <head>, styles the elements.
-The JavaScript file, linked in the <body>, adds interactivity and dynamic functionality.
-Together, these components create the interactive shopping list application.

CSS File
-This CSS file only styles two elements, which are:
   1) the h1 tag
   2) the body
   3) the purchase button

JS File
Variable Declaration:

inputField, addButton, itemList, and clearButton store references to the corresponding HTML elements.
shoppingList is an array to store the items.
Loading from Local Storage:

Checks if there's a shoppingList in local storage.
If found, it's loaded into the shoppingList array and the list is rendered.
Adding Items:

The addButton event listener:
Gets the item from the input field.
Adds it to the shoppingList array.
Clears the input field.
Renders the updated list.
Saves the updated list to local storage.
Marking Items as Purchased:

The itemList event listener:
Toggles the purchased class on the clicked list item.
Saves the updated purchase status to local storage.
Clearing the List:

The clearButton event listener:
Empties the shoppingList array.
Renders the empty list.
Clears the list from local storage.
Rendering the List:

The renderList function:
Clears the itemList element.
Iterates through the shoppingList array.
Creates a new li element for each item.
Sets the text content of the li element.
Checks the item's purchase status from local storage and adds the purchased class if necessary.
Appends the li element to the itemList.
Saving to Local Storage:

The saveToLocalStorage function:
Saves the shoppingList array to local storage.
Saves the purchase status of each item to local storage using a unique key.
This JavaScript code, in conjunction with the HTML and CSS, provides the dynamic functionality of the shopping list application.