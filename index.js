document.addEventListener("DOMContentLoaded", () => {
  const itemsListContainer = document.getElementById("itemsShoppingList");
  const addNewItem = document.getElementById("addNewItem");
  const clearItems = document.getElementById("clearItemsList");
  const addItem = document.getElementById("addItem");
  const checkoutItemsButton = document.getElementById("checkoutItemsButton");

  // Maintaining track of local storage memory
  let itemsShoppingList =
    JSON.parse(localStorage.getItem("itemsShoppingList")) || [];

  // Function to render list of items in the DOM
  function renderItemsList() {
    itemsListContainer.innerHTML = "";
    itemsShoppingList.forEach((item, items) => {
      const addedItem = document.createElement("li");
      addedItem.textContent = item.name;

      const markPurchasedButton = document.createElement("button");
      markPurchasedButton.textContent = item.purchased
        ? "Item Purchased"
        : "Mark Purchased";
      markPurchasedButton.className = item.purchased
        ? "purchased-button"
        : "mark-button";

      markPurchasedButton.addEventListener("click", () => {
        item.purchased = !item.purchased;
        updateLocalStorage();
        renderItemsList();
      });

      if (item.purchased) {
        addedItem.style.textDecoration = "line-through";
      }

      addedItem.appendChild(markPurchasedButton);
      itemsListContainer.appendChild(addedItem);

      addedItem.addEventListener("dblclick", () => editItem(items));
    });
  }

  // Function to check if an item exist in the list and to items to the list
  function addItemToList() {
    const itemName = addNewItem.value.trim();
    if (itemName) {
      const itemExistInList = itemsShoppingList.findIndex(
        (item) => item.name === itemName
      );
      if (itemExistInList > -1) {
        const confirmAddedItem = confirm(
          `"${itemName}" is already in the list. Do you want to add it again?`
        );
        if (!confirmAddedItem) {
          addNewItem.value = "";
          return;
        }
      }
      itemsShoppingList.push({ name: itemName, purchased: false });
      addNewItem.value = "";
      updateLocalStorage();
      renderItemsList();
    }
  }

  // Function for editing items in the list
  function editItem(item) {
    const newItemName = prompt("Edit item:", itemsShoppingList[item].name);
    if (newItemName && newItemName.trim()) {
      itemsShoppingList[item].name = newItemName.trim();
      updateLocalStorage();
      renderItemsList();
    }
  }

  // Function for clearing items in the list
  function clearItemsList() {
    itemsShoppingList = [];
    updateLocalStorage();
    renderItemsList();
  }

  // Function for checkout
  function itemsCheckout() {
    let itemsToCheckout = [];
    itemsShoppingList.filter((item, itemRemove) => {
      const removeItem = confirm(
        `Do you want to remove ("${item.name}") from your shopping list?`
      );
      if (removeItem) {
        itemsToCheckout.push(itemRemove);
      }
    });

    itemsToCheckout.reverse().forEach((itemRemove) => {
      itemsShoppingList.splice(itemRemove, 1);
    });

    itemsShoppingList = itemsShoppingList.map((item) => ({
      ...item,
      purchased: true,
    }));
    updateLocalStorage();
    renderItemsList();
    alert("All items marked as purchased. You can continue adding new items.");
  }

  // Function to update the local storage
  const updateLocalStorage = () => {
    localStorage.setItem(
      "itemsShoppingList",
      JSON.stringify(itemsShoppingList)
    );
  };

  addItem.addEventListener("click", addItemToList);
  clearItems.addEventListener("click", clearItemsList);
  checkoutItemsButton.addEventListener("click", itemsCheckout);

  renderItemsList();
});
