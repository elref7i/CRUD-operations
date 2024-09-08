
// ^ >=======> Start Intro
// var spanUser = document.getElementById("span-user");
// var inputUserName = document.getElementById("input-user-name") ;

// *  >=======> local Storage

// spanUser.innerHTML = localStorage.getItem("username") || "User";
// inputUserName.value = localStorage.getItem("nameinput") ;
// function saveUser(){
    
//     localStorage.setItem("username",inputUserName.value);
//     spanUser.innerHTML = inputUserName.value;

// }
// function setprogess(){
//     localStorage.setItem("nameinput",inputUserName.value);
// }
// function removename(){
//     localStorage.removeItem("username")
// }
// *  >=======> Session Storage

// spanUser.innerHTML = sessionStorage.getItem("username") || "User";
// inputUserName.value = sessionStorage.getItem("nameinput") ;
// function saveUser(){
    
//     sessionStorage.setItem("username",inputUserName.value);
//     spanUser.innerHTML = inputUserName.value;

// }
// function setprogess(){
//     sessionStorage.setItem("nameinput",inputUserName.value);
// }
// function removename(){
//     sessionStorage.removeItem("username")
// }

// ^ >=======> End Intro


////////////////////

// !!! >=======> Start Product Management System

// *** HTML elements

 //? ليه هنا ممش بجيب القيمه بتاعه الحقل واحفظها فى متيغر 
///* لانى اول ما تفتح الموقع او تعمل تحديث لى الموقع بيكون الحقل فاضى فيكون القيمه بى NULL 

    var nameProduct = document.getElementById("nameProduct");

    var categoryInput = document.getElementById("categoryInput");

    var priceProduct = document.getElementById("priceProduct");

    var descriptionProduct = document.getElementById("descriptionProduct");

    var imageInput = document.getElementById("imageInput");

    var productContainer = document.getElementById("allCard");

    var searchInput = document.getElementById("searchInput");

    var validError = document.getElementById("validError");

    var addButton = document.getElementById("addButton");

    var updateButton = document.getElementById("updateButton");



    
    
// ^^^ App variables
var updatedIndex;
var nameRegex = /^[A-Za-z][a-z]{3,}([1-9][1-9])?$/;
var categoryRegex = /^[A-Za-z][a-z]{3,}$/;
var priceRegex = /^([0-9]|[1-9][0-9]|100|[1-9][0-9][0-9]|1000|[1-9][0-9][0-9][0-9]|10000|[1-9][0-9][0-9][0-9][0-9]|10000)$/;
var descriptionRegex= /^[a-z\s]{25,100}$/;

productList =  JSON.parse(localStorage.getItem("products")) || [];
displayAllProduct();

// &&& Functions 
function addProduct(){
    if(validate(nameRegex,nameProduct)&&
    validate(categoryRegex,categoryInput)&&
    validate(priceRegex,priceProduct)&&
    validate(descriptionRegex,descriptionProduct)){
        var product = {
            name : nameProduct.value,
            category:categoryInput.value,
            price:priceProduct.value,
            descriptionProduct:descriptionProduct.value,
            imageInput:"/images/"+imageInput.files[0].name
        };
    
        productList.push(product);
        localStorage.setItem("products",JSON.stringify(productList));
        displayProduct(productList.length-1);
        clearvalue();
    }else{
        alert("8lt");
    }
    
};

function clearvalue(){
    nameProduct.value = null
    categoryInput.value = null
    priceProduct.value = null
    descriptionProduct.value = null
    imageInput.value = null
    nameProduct.classList.remove("is-valid");
    categoryInput.classList.remove("is-valid");
    priceProduct.classList.remove("is-valid");
    descriptionProduct.classList.remove("is-valid");
}
function displayProduct(index){
var productHTML = 
`
<div class="col-12 col-md-6 col-lg-4">
        <div class="card position-relative">
            <div class="parent-image | d-flex justify-content-center align-items-center rounded overflow-hidden bg-light">
            <img src="${productList[index].imageInput}" class="card-image my-3" alt="...">
            </div>
            <div class="card-body rounded-top  text-light">
            <div class="d-flex justify-content-between align-items-center">
            <h4 class="cardName | text-capitalize" id="displayName">${productList[index].name}</h4>
            <h5 class="cardprice h5 p-2 rounded-3" id="displayPrice">
            ${productList[index].price}<span class="fw-bold">$</span>
            </h5>
            </div>
            <h6 class="h4 text-capitalize"> ${productList[index].category}</h6>
            <p class="card-text text-light-50 mb-3" id="dispalyDes">${productList[index].descriptionProduct}</p>
            <div class="Buttons text-center d-flex justify-content-center align-items-center gap-4 pt-3">
                <a class="card-update | text-decoration-none fs-6  d-flex align-items-center gap-1" role="button" onclick="getProductInfo(${index})">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                    class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                </svg>
                Edit
                </a>
                <a class="card-delete  | text-decoration-none  fs-6  d-flex align-items-center gap-1" role="button" onclick="deleteProduct(${index})">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                    class="bi bi-trash3" viewBox="0 0 16 16">
                    <path
                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
                Delete
                </a>
                <!-- <h6>${index}</h6> -->
            </div>
            </div>
        </div>
        </div>
`
    productContainer.innerHTML += productHTML;
}
function displayAllProduct(){
    for (var i = 0 ;  i < productList.length ;i++ ){
        displayProduct(i);
    }
}
// 
function deleteProduct(index){
    //* Delete from productList
    productList.splice(index,1); 
    //* Delete from LocalStorge
    localStorage.setItem("products",JSON.stringify(productList));
    //* Delete from HTML
    productContainer.innerHTML=""
    displayAllProduct();

}
// search ==>realtime search وانا بكتب الحروف يبحث عن المنتج 
// search ==>Search    بكتب المنتج وبعدين اضغط اعمل بحث
function searchProduct(){
    productContainer.innerHTML = "";
    for( var i =0; i<productList.length;i++){
        if(productList[i].name.toLowerCase().includes(searchInput.value.toLowerCase())){
            displayProduct(i);
        }
    }
}
function updateProduct(){
}

// ^ Validation


function  validate(regex,ele){
    if(regex.test(ele.value)){
        ele.classList.add("is-valid");
        ele.classList.remove("is-invalid");
        ele.nextElementSibling.nextElementSibling.classList.add("visually-hidden");
        return true;
    }
        ele.classList.add("is-invalid");
        ele.classList.remove("is-valid");
        ele.nextElementSibling.nextElementSibling.classList.remove("visually-hidden");
        return false;
}
function getProductInfo(index){
    updatedIndex = index;
    nameProduct.value = productList[index].name;
    categoryInput.value = productList[index].category;
    descriptionProduct.value = productList[index].descriptionProduct;
    priceProduct.value = productList[index].price;
    addButton.classList.add("d-none");
    updateButton.classList.remove("d-none");
}
function updateProduct(){
    if(validate(nameRegex,nameProduct)&&
    validate(categoryRegex,categoryInput)&&
    validate(priceRegex,priceProduct)&&
    validate(descriptionRegex,descriptionProduct)){
        console.log(updatedIndex);
        productList[updatedIndex].name = nameProduct.value;
        productList[updatedIndex].category = categoryInput.value ;
        productList[updatedIndex].descriptionProduct = descriptionProduct.value  ;
        productList[updatedIndex].price = priceProduct.value;
        if(imageInput.files.length > 0){
            productList[updatedIndex].imageInput= "/images/"+imageInput.files[0].name;
        }
        updateButton.classList.add("d-none");
        addButton.classList.remove("d-none");
        //*Update LoclaStorge 
        localStorage.setItem("products",JSON.stringify(productList));
        //* Update from HTML
        productContainer.innerHTML=""
        displayAllProduct();
        clearvalue();
    }else{
        alert("8lt");
    }
}

// !!! >=======> End Product Management System