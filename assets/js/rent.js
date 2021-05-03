const sectionE = document.getElementById('availableRentCar');
let car;

function loadCar(){
  const carItems = JSON.parse(localStorage.getItem('rent')) || [];
  car = new Car(carItems);
}

function renderWeb(){
  loadCar();
  showCar();
}

function showCar(){
  //Create the rent card div

  for (let i = 0; i < car.cars.length; i++) {
    let cardRent = document.createElement('div');
    cardRent.setAttribute('class', 'car-rent');
    sectionE.appendChild(cardRent);

    //Create the flip card inner div
    let cardRentInner = document.createElement('div');
    cardRentInner.setAttribute('class', 'car-rent-inner');
    cardRent.appendChild(cardRentInner);

    let imgCar = document.createElement('img');
    cardRentInner.appendChild(imgCar);
    imgCar.src = car.cars[i].myImg;

    // let titleSpan = document.createElement('span');
    // titleSpan.setAttribute('class', 'title');
    // flipCardFront.appendChild(titleSpan);


    // let priceSpan = document.createElement('span');
    // titleSpan.setAttribute('class', 'titlenum');
    // titleSpan.appendChild(priceSpan);
    // priceSpan.textContent = car.cars[i].price;

    let nameCar = document.createElement('h1');
    cardRentInner.appendChild(nameCar);
    nameCar.textContent = car.cars[i].manufacture; //manufactrunig

    let modelCar = document.createElement('p');
    cardRentInner.appendChild(modelCar);
    modelCar.textContent = `Model ${car.cars[i].model} / Model Year ${car.cars[i].modelY}`; // model and model year

    let mileAndDesCar = document.createElement('p');
    cardRentInner.appendChild(mileAndDesCar);
    mileAndDesCar.textContent =`Mile ${car.cars[i].mileAge} / Description ${car.cars[i].description}`; // mile and Description car
    car.cars[i].mileAge; // mile car

    let priceSpan = document.createElement('span');
    cardRentInner.setAttribute('class', 'titlenum');
    cardRentInner.appendChild(priceSpan);
    priceSpan.textContent = car.cars[i].price;

    let rentNow = document.createElement('button');
    rentNow.textContent = 'Rent Now'; // button
    rentNow.classList.add('remover');
    rentNow.id = i;
    cardRentInner.appendChild(rentNow);

  }
}

function removeItemFromCart(event) {
  // Only do anything interesting if the clicked item was a delete button.
  if (event.target.classList.contains('remover')) {
    // Remove that item from the cart, based on the ID we set when we created the button.
    car.removeItem(parseInt(event.target.id));
    // Save the cart back to local storage.
    car.saveToLocalStorageRentCar();
    // Redraw the cart.
    // renderCart();
  }
}

sectionE.addEventListener('click', removeItemFromCart);
renderWeb();
