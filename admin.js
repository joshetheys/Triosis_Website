const container = document.getElementById("tableContainer");
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

// localStorage.clear();
let currentlyFiltered = products;
let currentItems = JSON.parse(localStorage.getItem('records')) ? JSON.parse(localStorage.getItem('records')) : items;
function setItems(){
    if(!JSON.parse(localStorage.getItem('records'))){
        localStorage.setItem('records', JSON.stringify(currentItems));
        console.log(JSON.parse(localStorage.getItem('records')));
    }else{
        console.log(JSON.parse(localStorage.getItem('records')));
    }
}
setItems();
function createTable(curItems){
    container.innerHTML = '';
    curItems.forEach(e => {
        container.innerHTML += `<tr>
    <th >${e.id}</th>
        <td><img src="${e.img}" class="img-fluid"></  td>
        <td>${e.title}</td>
        <td>${e.price}</td>
        <td>${e.bedrooms}</td>
        <td>${e.bathrooms}</td>
        <td>${e.parking}</td>
        <td>${e.propertyType}</td>
        <td>${e.address}</td>
        <td>${e.area} sq.feet</td>
        <td>
        <div class="d-flex justify-content-between align-items-center">
            <i class="fa-solid fa-square-plus"></i> <i onclick="deleteItem(${e.id})" class="fa-solid fa-trash"></i>
        </div>
        </td>
    </tr>`
    });
}
createTable(currentItems);
function deleteItem(id){
    let curStorage = JSON.parse(localStorage.getItem('records'));
    curStorage.splice((id-1),1);
    for(let i = 0; i<curStorage.length;i++){
        curStorage[i].id = i+1;
    }
    localStorage.clear();
    localStorage.setItem('records',JSON.stringify(curStorage));
    currentItems = curStorage;
    createTable(curStorage);
}
function filterByPrice(e){
    if(e.target.value =="Any"){
        return createTable(currentlyFiltered);
    }
    let filteredResult = currentlyFiltered.filter(x =>{
        return x.price <= e.target.value;
    });
    createTable(filteredResult);
}
function filterByProperties(e){
    if(e.target.value =="Any"){
        return createTable(currentItems);
    }
    let filteredResult = currentItems.filter(x =>{
        return x.price <= e.target.value;
    });
    createTable(filteredResult);
}
function filterByPrice(e){
    if(e.target.value =="Any"){
        return createTable(currentItems);
    }
    let filteredResult = currentItems.filter(x =>{
        return x.price <= e.target.value;
    });
    createTable(filteredResult);
}