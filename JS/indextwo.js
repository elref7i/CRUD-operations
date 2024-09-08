// * HTML Value

var nameProduct = document.getElementById("nameProduct");

var categoryInput = document.getElementById("categoryInput");

var priceProduct = document.getElementById("priceProduct");

var descriptionProduct = document.getElementById("descriptionProduct");

var imageInput = document.getElementById("imageInput");
var allCard = document.getElementById("allCard");

var productList = JSON.parse(localStorage.getItem("product")) || [];
displayAllProduct();
function addProduct(){
    var product = {
        name : nameProduct.value,
        category : categoryInput.value,
        price : priceProduct.value, 
        description : descriptionProduct.value,
        imageInput:"/images/"+imageInput.files[0].name
    }
    productList.push(product);
    localStorage.setItem("product",JSON.stringify(productList));
    displayProduct(productList.length-1);
    clearInput();

}

function clearInput(){
    nameProduct.value=null;
    categoryInput.value=null;
    descriptionProduct.value=null;
    imageInput.value=null;
}

function displayProduct(index){
    var productHTML = 
`
<div class="col-12 col-md-6 col-lg-4">
        <div class="card position-relative">
            <div class="parent-image | d-flex justify-content-center align-items-center mb-2 rounded overflow-hidden">
            <img src="${productList[index].imageInput}" class="card-image my-3" alt="...">
            </div>
            <div class="card-body shadow-lg   rounded-top  text-light">
            <h4 class="cardName | text-capitalize" id="displayName">${productList[index].name}</h4>
            <h5 class="cardprice h6 position-absolute top-0 end-0 bg-success p-2 rounded-3" id="displayPrice">
            ${productList[index].price}$
            </h5>
            <h6 class="h4 text-capitalize">${productList[index].category}</h6>
            <p class="card-text text-light-50 mb-3" id="dispalyDes">${productList[index].description}</p>
            <div class="Buttons text-center d-flex justify-content-center align-items-center gap-4 pt-3">
                <a class="card-update text-decoration-none fs-6  d-flex align-items-center gap-1" role="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                    class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                </svg>
                Edit
                </a>
                <a class="card-delete | text-decoration-none fs-6  d-flex align-items-center gap-1" role="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                    class="bi bi-trash3" viewBox="0 0 16 16">
                    <path
                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
                Delete
                </a>
            </div>
            </div>
        </div>
        </div>
`
    allCard.innerHTML += productHTML;

}
function displayAllProduct(){
    for(var i = 0 ; i <= priceProduct.length-1;i++){
        displayProduct(i);
    }
}


