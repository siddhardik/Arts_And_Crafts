const products=[
    {
        id:0,
        image:'images/img1.jpg',
        title:'Image 1',
        price:187
    },
    {
        id:1,
        image:'images/img2.jpg',
        title:'Image 2',
        price:190
    },
    {
        id:2,
        image:'images/img3.jpg',
        title:'thakur',
        price:139
    },
    {
        id:3,
        image:'images/img4.jpg',
        title:'Image 4',
        price:15
    },
    {
        id:4,
        image:'images/img1.jpg',
        title:'Image 5',
        price:178
    },
    {
        id:5,
        image:'images/img4.jpg',
        title:'Image 6',
        price:1670
    }
]



function showProducts() {
   
    let html = "";
    products.forEach(function (product_object, index) {
      html += ` <div class="card product_card" style="width: 20rem;">
      <img src="${product_object.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product_object.title}</h5>
        <p class="card-text"> Price : ${product_object.price}</p>
        <a  id= ${index} onclick="addToCart(${product_object.id})" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>`;
    });
    let productArea = document.getElementById("products");
    productArea.innerHTML=html;
   
  }

  showProducts();

let search = document.getElementById("findBt");
search.addEventListener("input", function () {

  let inputVal = search.value.toLowerCase();
  let productsCards = document.getElementsByClassName("card");
  Array.from(productsCards).forEach(function (element) {
    let productTitle = element.getElementsByTagName("h5")[0].innerText.toLowerCase();
    if (productTitle.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});



//  addToCart Function 

function addToCart(id_now){
  let cartProducts = localStorage.getItem("cart_products_json");
  let cart_product_obj=[];
  if (cartProducts == null) {
    cart_product_obj = [];
  } else {
    // Convert JSON to javascript Object
    cart_product_obj= JSON.parse(cartProducts);
  }

  var result = products.find(item => item.id === id_now);
  cart_product_obj.push(result);
  // Pop up message 
  alert("Product " + result.title +" has been added to your cart 🙋‍♂️ ");
  localStorage.setItem("cart_products_json", JSON.stringify(cart_product_obj));

}



