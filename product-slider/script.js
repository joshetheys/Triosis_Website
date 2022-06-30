
const products = [
        {
          discount: "25% off",
          title: "BTS Van Bag",
          imgURL: "./images/van.jpg",
          description: "The Perfect Bag for an Army.",
          price: "R180",
          actualprice: "R225"
        },
        {
            discount: "25% off",
            title: "BTS Koya Bag",
            imgURL: "./images/koya.jpg",
            description: "The Perfect Bag for an RM stan.",
            price: "R180",
            actualprice: "R225"
          },
          {
          discount: "25% off",
          title: "BTS RJ Bag",
          imgURL: "./images/rj.jpg",
          description: "The Perfect Bag for a Jin stan.",
          price: "R180",
          actualprice: "R225"
          },
          {
          discount: "25% off",
          title: "BTS Mang Bag",
          imgURL: "./images/mang.jpg",
          description: "The Perfect Bag for a J-Hope stan. Who wouldn't love the little horse.",
          price: "R180",
          actualprice: "R225"
          },
          {
          discount: "25% off",
          title: "BTS Shooky Bag",
          imgURL: "./images/shooky.jpg",
          description: "The Perfect Bag for a Yoongi stan. It has all the sass and cuteness you need.",
          price: "R180",
          actualprice: "R225"
          },
          {
          discount: "25% off",
          title: "BTS Chimmy Bag",
          imgURL: "./images/chimmy.jpg",
          description: "The Perfect Bag for an Jimin stan",
          price: "R180",
          actualprice: "R225"
          },
          {
          discount: "25% off",
          title: "BTS Tata Bag",
          imgURL: "./images/tata.jpg",
          description: "The Perfect Bag for an Taehyung stan. Show your love for the fandom with this cute accessory.",
          price: "R180",
          actualprice: "R225"
          },
          {
          discount: "25% off",
          title: "BTS Cooky Bag",
          imgURL: "./images/cooky.jpg",
          description: "The Perfect Bag for a Jungkook stan.",
          price: "R180",
          actualprice: "R225"
          },
          {
          discount: "33% off",
          title: "BTS Sweater",
          imgURL: "./images/sweater.jpg",
          description: "Feeling Cold? This Sweater is sure to warm you up. With a soft inner lining you can express your love for BTS in comfort and style.",
          price: "R300",
          actualprice: "R450"
          },
          {
          discount: "33% off",
          title: "BTS Sock Set of 8",
          imgURL: "./images/socks.jpg",
          description: "Can't choose your bias? Get the sock set. There's more than enough to wear every day of the week.",
          price: "R400",
          actualprice: "R600"
          },
      ];

 

const cont = document.getElementById("prodcont");

localStorage.setItem('record',JSON.stringify())

function create(){
    products.forEach(element => {
        cont.innerHTML += `<div class="col-md-6 text-center">
        <div class="product-card mx-auto">
            <div class="product-image"> 
                <span class="discount-tag">${element.discount}</span>
                <img src="${element.imgURL}" class="img-fluid w-100" alt="">
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">${element.title}</h2>
                <p class="product-short-description">${element.description}</p>
                <span class="price">${element.price}</span><span class="actual-price">${element.actualprice}</span>
            </div>
        </div>
    </div>`
    });
}

create();let display = document.getElementById('properties')

// clear array
function loadData(magicWeapons){ 
    document.querySelector("#properties").innerHTML = "";

// displaying on html
magicWeapons.forEach((item) => {
    display.innerHTML += `
    <div class="col-md-6">
    
    <div class="card mx-auto" style="width: 40rem;position:relative; height:350px; margin-bottom: 40px">

            <img class="card-img-top img-fluid" 
            style="height: 350px; object-fit: cover; " src="${item.image}" alt="Card image cap">

            <div id="backface" class="card-body">

                <h5 class="card-title" style="padding-bottom: 1rem;">${item.name}</h5>

                <p class="card-text">
                    ${item.abilities}
                </p>

                <p class="card-text row">
                    <div class="col-6">
                        <i class="fa-solid fa-wand-sparkles"></i>
                        <strong>${item.type}</strong>
                    </div> 
                    <div class="col-6">
                        <i class="bi bi-stars"></i>
                        <strong>${item.price} stardust</strong>
                    </div>
                </p>

            </div>
    </div>
    </div>
    `
})}

loadData(products)

// sort dropdown
function typeSort(e) {
    const type = e.target.value;
    if (type === "all" ) {
        return loadData(magicWeapons)
    }
    const filtered = magicWeapons.filter((item) => item.type === type);

    return loadData(filtered);
}

// textSearch
const textSearch = (e) => {
    const text = e.target.value;
    const filteredItems = magicWeapons.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase())
    );
    loadData(filteredItems);
};