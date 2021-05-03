const sectionE = document.getElementById('availableCar');
// const filterCar = document.getElementById('myBtnContainer');
let car;
let imgCar;

function loadCar(){
  const carItems = JSON.parse(localStorage.getItem('car')) || [];
  car = new Car(carItems);
}

function renderWeb(){
  loadCar();
  showCar();
  // ss();
  // filterCar();
}

function showCar(){
  //Create the flip card div

  for (let i = 0; i < car.cars.length; i++) {
    let product = document.createElement('div');
    product.setAttribute('class', `product ${car.cars[i].manufacture}`);
    sectionE.appendChild(product);
    console.log(product);
    let itemCar = document.createElement('div');
    itemCar.setAttribute('class', `'itemCar ${car.cars[i].manufacture}'`);
    product.appendChild(itemCar);

    let flipCard = document.createElement('div');
    flipCard.setAttribute('class', 'flip-card');
    itemCar.appendChild(flipCard);

    //Create the flip card inner div
    let flipCardInner = document.createElement('div');
    flipCardInner.setAttribute('class', 'flip-card-inner');
    flipCard.appendChild(flipCardInner);

    //Create the flip card front div
    let flipCardFront = document.createElement('div');
    flipCardFront.setAttribute('class', 'flip-card-front');
    flipCardInner.appendChild(flipCardFront);

    imgCar = document.createElement('img');
    flipCardFront.appendChild(imgCar);
    imgCar.src = car.cars[i].myImg;

    let titleSpan = document.createElement('span');
    titleSpan.setAttribute('class', 'title');
    flipCardFront.appendChild(titleSpan);


    let priceSpan = document.createElement('span');
    priceSpan.setAttribute('class', 'titlenum');
    flipCardFront.appendChild(priceSpan);
    priceSpan.textContent = car.cars[i].price;

    //Create the flip card back div
    let flipCardBack = document.createElement('div');
    flipCardBack.setAttribute('class', 'flip-card-back');
    flipCardInner.appendChild(flipCardBack);

    let nameCar = document.createElement('h1');
    flipCardBack.appendChild(nameCar);
    nameCar.textContent = car.cars[i].manufacture; //manufactrunig

    let modelCar = document.createElement('p');
    flipCardBack.appendChild(modelCar);
    modelCar.textContent = car.cars[i].model; // model

    let yearCar = document.createElement('p');
    flipCardBack.appendChild(yearCar);
    yearCar.textContent = car.cars[i].modelY; // model year

    let mileCar = document.createElement('p');
    flipCardBack.appendChild(mileCar);
    mileCar.textContent =car.cars[i].mileAge; // mile car

    let discCar = document.createElement('p');
    flipCardBack.appendChild(discCar);
    discCar.textContent = car.cars[i].description; // discription

  }
  // filterSelection('bmw');
  // filterSelection('gmc');
  // filterSelection('mercedes');
  // filterSelection('hyundai');

}


// filterCar.addEventListener('click', filter);
renderWeb();
