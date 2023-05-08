const products=[
    {
        id:0,
        image:'images/img1.jpg',
        title:'Image 1',
        price:1345
    },
    {
        id:1,
        image:'images/img2.jpg',
        title:'Image 2',
        price:1395
    },
    {
        id:2,
        image:'images/img3.jpg',
        title:'thakur',
        price:1345
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
        price:17
    },
    {
        id:5,
        image:'images/img4.jpg',
        title:'Image 6',
        price:167
    }
]



function showProducts() {
   
    let html = "";
    products.forEach(function (product_object, index) {
      html += ` <div class="card" style="width: 20rem;">
      <img src="${product_object.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product_object.title}</h5>
        <p class="card-text"> Price : ${product_object.price}</p>
        <a  id= ${index} onclick="addToCart(${this.id})" class="btn btn-primary">Add to Cart</a>
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
