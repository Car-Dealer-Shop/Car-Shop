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
  localStorage.setItem('car', JSON.stringify(this.cars));
};

Car.prototype.saveToLocalStorageRentCar = function(){
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
