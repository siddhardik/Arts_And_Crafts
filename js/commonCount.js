function showCount(){
    let cartProducts = localStorage.getItem("cart_products_json");
   
    // Convert JSON to javascript Object
      let cart_product_obj= JSON.parse(cartProducts);
      count=cart_product_obj.length;
    
  document.getElementById("count").innerText=count;
  }

  showCount();