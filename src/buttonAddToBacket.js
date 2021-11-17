console.log("buttonAddToBacket.js is loading...");


const ButtonAdding = {
    productTittle: "g",
    productDescription: "g",


    addNewProduct: (e) => {
        e.target.value = "Added";
        var elem = document.querySelector(".main__items__item--button");  
        App.product = {};
        App.product.tittle = e.target.parentElement.children[0].textContent;
        App.product.description = e.target.parentElement.children[2].textContent;
        let length = App.products.length
        App.products[length] = App.product;
        sessionStorage.setItem("products", JSON.stringify(App.products));
        console.log("Added product:\n" + App.product.tittle + "\n" + App.product.description);
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





