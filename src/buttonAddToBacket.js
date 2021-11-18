"use strict";

console.log("buttonAddToBacket.js is loading...");

const ButtonAdding = {
    
    addNewProduct: (e) => {
        let product = {};
        let products = [];
        let length = 0;
        let elem = e.target;

        elem.value = "Added";
        elem.style.color = "#4caf50";
        elem.style.fontStyle = "italic";
        elem.style.fontWeight = "bold";
        // var elem = document.querySelector(".main__items__item--button");  
        
        product.tittle = e.target.parentElement.children[0].textContent;
        product.description = e.target.parentElement.children[2].textContent;

        let storedPproducts = JSON.parse(sessionStorage.getItem("products"));
        if(storedPproducts !== null)
        {
            products = storedPproducts;
            length = storedPproducts.length;
        }
        
        products[length] = product;
        sessionStorage.setItem("products", JSON.stringify(products));
        console.log("Added product:\n" + product.tittle + "\n" + product.description);
    },

    addEvents: () => {
        let addingButtons = document.getElementsByClassName("main__items__item--button");

        for (let i = 0; i < addingButtons.length; i++) {
            const element = addingButtons[i];
            element.addEventListener("click", ButtonAdding.addNewProduct);     
        }
    } 
}


ButtonAdding.addEvents();

console.log("buttonAddToBacket.js is loaded.");





