const sectionE = document.getElementById('availableCar');
let car;
function loadCar(){
  const carItems = JSON.parse(localStorage.getItem('car')) || [];
  car = new Car(carItems);
//   console.log(car.cars);
}
// loadCar();
// console.log(car.cars);
function showCar(){
  //Create the flip card div
  for (let i = 0; i < car.cars.length; i++) {
    let flipCard = document.createElement('div');
    flipCard.setAttribute('class', 'flip-card');
    sectionE.appendChild(flipCard);

    //Create the flip card inner div
    let flipCardInner = document.createElement('div');
    flipCardInner.setAttribute('class', 'flip-card-inner');
    flipCard.appendChild(flipCardInner);

    //Create the flip card front div
    let flipCardFront = document.createElement('div');
    flipCardFront.setAttribute('class', 'flip-card-front');
    flipCardInner.appendChild(flipCardFront);

    let imgCar = document.createElement('img');
    flipCardFront.appendChild(imgCar);
    imgCar.textContent = 'X';

    let titleSpan = document.createElement('span');
    titleSpan.setAttribute('class', 'title');
    flipCardFront.appendChild(titleSpan);


    let priceSpan = document.createElement('span');
    titleSpan.setAttribute('class', 'titlenum');
    flipCardFront.appendChild(priceSpan);
    priceSpan.textContent = '2000';

    //Create the flip card back div
    let flipCardBack = document.createElement('div');
    flipCardBack.setAttribute('class', 'flip-card-front');
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
    mileCar.textContent =car.cars[i].mileAge; // mike car

    let discCar = document.createElement('p');
    flipCardBack.appendChild(discCar);
    discCar.textContent = car.cars[i].description; // discription

  }


}

function renderWeb(){
  loadCar();
  showCar();
}
renderWeb();
