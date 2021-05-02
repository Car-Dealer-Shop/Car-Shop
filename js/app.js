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

const CarItem = function(manufacture, model, modelYear, mileAge, description){
  this.manufacture = manufacture;
  this.model = model;
  this.modelYear = modelYear;
  this.mileAge = mileAge;
  this.description = description;

  CarItem.allCar.push(this);
};

CarItem.allCar = [];
