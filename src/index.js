"use strict";

console.log("Index.js is loading...")

const App = {
    product: {
        tittle: "",
        description: ""
    },
    products: [],

    getBacketCount: function() {
        return this.products.length;
    },

    updateBacketCountIcon: function(){
        let prods = JSON.parse(sessionStorage.getItem("products"));
        let elem = document.querySelector(".header__basket--counter");
        let count = 0;
        if(prods !== null)
        {
            count = prods.length;
        }
        elem.textContent = count;
    },

    updateListOfProductsOnMainPage: function(){
        let allProducts = this.getAllProductsInStore()
        let length = allProducts.length;
        if(length < 1)
        {
            return;
        }

        for (let i = 0; i < length; i++) {
            const product = allProducts[i];
            
            let elemProd = document.createElement("div");
            elemProd.className = "main__items__item";

            let elemTit = document.createElement("div");
            elemTit.className = "main__items__item--tittle";
            elemTit.textContent = product.tittle; 

            let elemImg = document.createElement("img");
            elemImg.className = "main__items__item--image";
            elemImg.src = product.image; 
            elemImg.alt = "image";

            let elemDesc = document.createElement("div");
            elemDesc.className = "main__items__item--description";
            elemDesc.textContent = product.description;

            let elemBut = document.createElement("input");
            elemBut.type = "button";
            elemBut.className = "main__items__item--button";
            elemBut.value = "Add to basket";

            elemProd.appendChild(elemTit);
            elemProd.appendChild(elemImg);
            elemProd.appendChild(elemDesc);
            elemProd.appendChild(elemBut);
            
            let mainItems = document.querySelector(".main__items");
            mainItems.appendChild(elemProd);                
        }   
    },

    getAllProductsInStore: () => {
        let products = JSON.parse(localStorage.getItem("products"));
        if(products === null)
        {
            products = [];
        }
        return products;
    },

    
}


App.updateBacketCountIcon();
App.updateListOfProductsOnMainPage();
console.log("Index.js is loaded.")