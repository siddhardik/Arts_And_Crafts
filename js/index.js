const products = [
  {
    id: 0,
    image: 'images/a1.jpg',
    title: 'Bengal Handicrafts & Handlooms Decorative Wall_Hanging Navadurga murti on 14X12 Inch Bamboo_kulo',
    price: 1299
  },
  {
    id: 1,
    image: 'images/b1.jpg',
    title: 'Bengal Handicrafts & Handlooms Natural Shola Chandmala for Durga Puja, Chand mala for Laxmi Puja',
    price: 599
  },
  {
    id: 2,
    image: 'images/c1.jpg',
    title: 'Breeze Handicrafts Wooden Showpiece Bankura Horse Statue for Home Decoration West Bengal Souvenir ',
    price: 975
  },
  {
    id: 3,
    image: 'images/d1.jpg',
    title: 'Bengal Handicrafts & Handlooms Braided Jute Placemats, Set of 2. Best for Bed-Side Table/Centre',
    price: 399
  },
  {
    id: 4,
    image: 'images/e1.jpg',
    title: 'Bengal Handicrafts & Handlooms Bamboo Circular Pendent Lamp Shades (Brown, 8 Inch) ',
    price: 475
  },
  {
    id: 5,
    image: 'images/f1.jpg',
    title: 'Handicrafts Paradise Banithani Painted On Marble Pate 9 Inch',
    price: 1295
  },

  {
    id: 6,
    image: 'images/g1.jpg',
    title: 'Karukala Handicraft Home Decor 11 Inch by 7.5 Inch Terracotta Jamini Roy Durga MATA Fig',
    price: 999
  },

  {
    id: 7,
    image: 'images/h1.jpg',
    title: 'Bengal Handicrafts & Handlooms Decorative Bamboo Pendent Lamp Shades ',
    price: 699
  },

  {
    id: 8,
    image: 'images/i1.jpg',
    title: 'Soul of Bengal - Women Hand Embroidered Kantha Stitch Cotton Blouse Material 1 Meter' ,
    price: 445
  },

  {
    id: 9,
    image: 'images/j1.jpg',
    title: 'AVIKA All India Handicrafts Bamboo Eco-Friendly Multiutility Wicker FarmerS Basket ',
    price: 599
  },

  {
    id: 10,
    image: 'images/k1.jpg',
    title: 'Bengal Handicrafts & Handlooms Braided Jute Placemats, 41 cm Round, Best for Bed-Side Table ',
    price: 429
  },

  {
    id: 11,
    image: 'images/l1.jpg',
    title: 'Bengal Handicrafts & Handlooms Jute Placemat. Dining Table Mate Items or Dining Table Runner.  ',
    price: 149
  },

  {
    id: 12,
    image: 'images/m1.jpg',
    title: 'Karukala Handicraft Home Decor 12 Inch by 9 Inch Terracotta Metallic Dancing Figure Art of Bengal',
    price: 949
  },

  {
    id: 13,
    image: 'images/n1.jpg',
    title: 'Bengal Handicrafts & Handlooms Handmade Bamboo Tea/Coffee/Beer Mug. Set of 2, 250ml (Natural Golden',
    price: 277
  },

  {
    id: 14,
    image: 'images/o1.jpg',
    title: 'Bengal Handicrafts & Handlooms Decorative Natural Bamboo Wall Hanging Flower Vase. (2, 13 Inch),',
    price: 299
  },

  {
    id: 15,
    image: 'images/p1.jpg',
    title: 'Home Decor Item “Deer Head”45 cm high with Horn – Wooden Handicraft showpieces Product for Wall',
    price: 999
  }


]

let count =0;



function showProducts() {
   
    let html = "";
    products.forEach(function (product_object, index) {
      html += ` <div class="card product_card" style="width: 19rem;">
      <img src="${product_object.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product_object.title}</h5>
        <p class="card-text"> <b>Price : ₹${product_object.price}</b></p>
        <a  id= ${index} onclick="addToCart(${product_object.id})" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>`;
    });
    let productArea = document.getElementById("products");
    productArea.innerHTML=html;
    showCount();
   
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
  count =cart_product_obj.length;
  // Pop up message 
  alert("Product " + result.title +" has been added to your cart 🙋‍♂️ ");
  localStorage.setItem("cart_products_json", JSON.stringify(cart_product_obj));
  showCount();

}

 function showCount(){
  let cartProducts = localStorage.getItem("cart_products_json");
 
  // Convert JSON to javascript Object
    let cart_product_obj= JSON.parse(cartProducts);
    count=cart_product_obj.length;
  
document.getElementById("count").innerText=count;
}



