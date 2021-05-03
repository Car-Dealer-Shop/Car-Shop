// const carForm = document.getElementById('carForm');


// let cars = new Car([]);
// function carInformationSubmit(e){
//   e.preventDefault();
//   let manufacture = e.target.manu.value;
//   let model = e.target.model.value;
//   let modelYear = e.target.modelY.value;
//   let mileAge = e.target.mile.value;
//   let description = e.target.desc.value;
//   cars.addCar(manufacture, model, modelYear, mileAge, description);
//   cars.saveToLocalStorage();
//   console.log(manufacture + model + modelYear + mileAge + description);
// }

// // function addItemToCar(){

// // }
// carForm.addEventListener('submit', carInformationSubmit);

const sectionE = document.getElementById('availableCar');
let car;
let imgCar;

function loadCar(){
  const carItems = JSON.parse(localStorage.getItem('car')) || [];
  car = new Car(carItems);
}

function renderWeb(){
  loadCar();
  showCar();
}

function showCar(){
  //Create the flip card div

  for (let i = 0; i < car.cars.length; i++) {
    // let container = document.createElement('div');
    // container.setAttribute('class', 'container');
    // sectionE.appendChild(container);
    // console.log(container);

    let itemCar = document.createElement('div');
    itemCar.setAttribute('class', `'itemCar ${car.cars[i].manufacture}'`);
    sectionE.appendChild(itemCar);

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


}

renderWeb();
