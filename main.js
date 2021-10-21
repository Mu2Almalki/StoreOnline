// var ccount = document.getElementById("ccount");
// var btns = document.querySelectorAll(".add-cart");

let carts =document.querySelectorAll('.add-cart');
let arrayProductsInCart=[];

// let products =[
//     {name:"collection of Coffee",
//       price:15 ,
//       inCart:0 } ,

//     {name:"collection of Stars",
//       price:30 ,
//       inCart:0} ,

//     {name:"Gifts for Women ",
//     price:20 ,
//     inCart:0 } ,

//     {name:"Gifts for Kids ", 
//      price:25. ,
//      inCart:0}
// ];
for(let i=0; i< carts.length; i++){
     carts[i].addEventListener('click',function(){
      let object ={};
      object["name"]=this.getAttribute('data-name')
      object["price"]=this.getAttribute('data-price')
      object["img"]=this.getAttribute('data-img')
      arrayProductsInCart.push(object);
      saveCart()
       // cartsNumbers(products[i]);
        //totalCost(products[i]);
    })
 }
 
 //save in localstorage
function saveCart() {
  localStorage.setItem("shoppingCart", JSON.stringify(arrayProductsInCart));
}
// get the array from localstorage
function loadCart() {
  arrayProductsInCart = JSON.parse(localStorage.getItem("shoppingCart"));
}
//------------- Check if there is products in the shopping cart then load it  -------------
if (localStorage.getItem("shoppingCart") != null) {
  loadCart();
}

let subtotal=0
let vat=0
let totalPrice=0
let cod ="MA"
let discaunt=0
function toShow(){
  arrayProductsInCart.forEach(function(item){
    console.log(item)
    let x=document.createElement("H3")
    let y=document.createElement("IMG")
    let a=document.createElement("P")
    let innerDiv =document.createElement("div")
    let outerDiv =document.getElementById("row row-cols-1 row-cols-md-3 g-4")
    
    

    x.innerText=item.name
    y.src =item.img
    a.innerText =item.price
    innerDiv.appendChild(x)
    outerDiv.appendChild(y)
    innerDiv.appendChild(a)
    outerDiv.appendChild(innerDiv)
    y.className="card-img-top"
    x.className="card-title"
    a.className="card-text"
    innerDiv.className="col"

    

    // innerDiv.classList.add("testImg")

    subtotal+=parseInt( item.price)
    let subtotalinner=document.getElementById("subtotal1")
    subtotalinner.innerText=subtotal

    vat=subtotal*(15/100)
    let vatinner=document.getElementById("vat1")
    vatinner.innerText=vat
    let totalPriceinner =document.getElementById("totalPrice1")
    totalPriceinner.innerText=subtotal+vat
    document.getElementById("aplayCobon1").addEventListener("click",dis)
    function dis(){ 
      if (document.getElementById("copon").value==cod){
        discaunt=20
        totalPrice= subtotal-discaunt
        totalPriceinner.innerText=totalPrice
      }
       
    
    }

    

  }) 


}


















 
