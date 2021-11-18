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
    }
}


App.updateBacketCountIcon();

console.log("Index.js is loaded.")