
const Car = function(cars){
  this.cars = cars;
};



//To add new Car
Car.prototype.addCar = function(manufacture, model, modelYear, mileAge, description) {
  // let count = 0;
  let newCar = new CarItem(manufacture, model, modelYear, mileAge, description);
  this.cars.push(newCar);
};

// To save Data in locall storage
Car.prototype.saveToLocalStorage = function(){
  localStorage.setItem('car', JSON.stringify(this.cars));
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
