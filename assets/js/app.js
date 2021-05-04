const Car = function(cars){
  this.cars = cars;
};


//To add new Car
Car.prototype.addCar = function(manufacture, model, modelYear, mileAge, price, description, myImg) {
  // let count = 0;
  let newCar = new CarItem(manufacture, model, modelYear, mileAge,price, description, myImg);
  this.cars.push(newCar);
};

// To save Data in locall storage buy car
Car.prototype.saveToLocalStorageBuyCar = function(){
  let carLoc = JSON.parse(localStorage.getItem('car'));
  console.log('rrr', carLoc);
  console.log(this.cars);
  if (carLoc) {

    carLoc.push(this.cars[this.cars.length-1]);

    localStorage.setItem('car', JSON.stringify(carLoc));
    console.log(carLoc);
  } else {
    localStorage.setItem('car', JSON.stringify(this.cars));
  }
  // localStorage.setItem('car', JSON.stringify(this.cars));
};

Car.prototype.saveToLocalStorageRentCar = function(){
  let carLoc = JSON.parse(localStorage.getItem('rent'));
  console.log('rrr', carLoc);
  console.log(this.cars);
  if (carLoc) {

    carLoc.push(this.cars[this.cars.length-1]);

    localStorage.setItem('rent', JSON.stringify(carLoc));
    console.log(carLoc);
  } else {
    localStorage.setItem('rent', JSON.stringify(this.cars));
  }
  // localStorage.setItem('rent', JSON.stringify(this.cars));
};

Car.prototype.saveToLocalStorageRentCarre = function(){

  localStorage.setItem('rent', JSON.stringify(this.cars));
};

// remove card from the localStorage
Car.prototype.removeItem = function (item) {
  this.cars.splice(item, 1);
};
const CarItem = function(manufacture, model, modelYear, mileAge, price, description, myImg){
  this.manufacture = manufacture;
  this.model = model;
  this.modelYear = modelYear;
  this.mileAge = mileAge;
  this.price = price;
  this.description = description;
  this.myImg = myImg;
  CarItem.allCar.push(this);
};

CarItem.allCar = [];
