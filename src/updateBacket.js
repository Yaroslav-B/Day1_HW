"use strict";

const Basket = {
    length: 0,

    UpdateBasketPage: () => {
        let products = Basket.getAddedProducts();

        if(length > 0)
        {
            for (let i = 0; i < length; i++) {
                const product = products[i];
                
                let elemProd = document.createElement("div");
                elemProd.className = "main__items__product";

                let elemTit = document.createElement("div");
                elemTit.className = "main__items__product--tittle";
                elemTit.textContent = product.tittle; 

                let elemDesc = document.createElement("div");
                elemDesc.className = "main__items__product--description";
                elemDesc.textContent = product.description;

                let elemSt = document.createElement("div");
                elemSt.className = "main__items__product--status";
                elemSt.textContent = "new!"

                elemProd.appendChild(elemTit);
                elemProd.appendChild(elemDesc);
                elemProd.appendChild(elemSt);
                
                let mainItems = document.querySelector(".basket__items");
                mainItems.appendChild(elemProd);                
            }           
        }
    },

    getAddedProducts: () => {
        let products = JSON.parse(sessionStorage.getItem("products"));
        if(products === null)
        {
            products = [];
        }
        length = products.length;
        return products;
    }  
}

Basket.UpdateBasketPage();
App.UpdateBasketCountIcon();
