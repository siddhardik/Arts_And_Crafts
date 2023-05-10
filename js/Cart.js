
function showCartProducts() {
  product_object_cart=JSON.parse(localStorage.getItem("cart_products_json"));
console.log(product_object_cart);
   
  let html = "";
  product_object_cart.forEach(function (product_object_cart, index) {
    html += `<div class="card rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2">
          <img
            src="${product_object_cart.image}"
            class="img-fluid rounded-3" >
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <p class="lead  fw-normal mb-2">${product_object_cart.title}</p>
          
        </div>
        
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h5 class="mb-0">₹${product_object_cart.price}</h5>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          <a onclick="RemoveFromCart(${index})" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
        </div>
      </div>
    </div>
  </div>`;
  });
  let CartProductArea = document.getElementById("cart_container");
  CartProductArea.innerHTML=html;
  
 
}

showCartProducts();
showTotalPrice();


function RemoveFromCart(element_index) {
  product_object_cart=JSON.parse(localStorage.getItem("cart_products_json"));

  // Pop up message 
  alert("Product " + product_object_cart[element_index].title +" has been removed from your cart 😔");
  //Remove 
  product_object_cart.splice(element_index, 1);
  totalCartProduct=product_object_cart.length;

  //Update Cart Array
  localStorage.setItem("cart_products_json", JSON.stringify(product_object_cart));
  showCartProducts();
  showTotalPrice();
  showCount();
  
  
}


function showTotalPrice(){

  let total =0;
  product_object_cart.forEach(function (product_object_cart) {
   total+=product_object_cart.price;
  });
document.getElementById("total_price").innerText=total;

}

function showCount(){
  let cartProducts = localStorage.getItem("cart_products_json");
 
  // Convert JSON to javascript Object
    let cart_product_obj= JSON.parse(cartProducts);
    count=cart_product_obj.length;
  
document.getElementById("count").innerText=count;
}

showCount();








