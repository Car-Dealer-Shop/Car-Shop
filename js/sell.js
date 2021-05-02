
'use strict';
// function Car (manufacture, model, modelYear, mileAge, description){
//   this.manufacture = manufacture;
//   this.model = model;
//   this.modelYear = modelYear;
//   this.mileAge = mileAge;
//   this.description = description;
// }


// const Car = function(cars){
//   this.cars = cars;
// };


// //To add new Car
// Car.prototype.addCar = function(manufacture, model, modelYear, mileAge, description) {
//   // let count = 0;
//   let newCar = new CarItem(manufacture, model, modelYear, mileAge, description);
//   this.cars.push(newCar);
// };

// // To save Data in locall storage
// Car.prototype.saveToLocalStorage = function(){
//   localStorage.setItem('car', JSON.stringify(this.cars));
// };

// const CarItem = function(manufacture, model, modelYear, mileAge, description){
//   this.manufacture = manufacture;
//   this.model = model;
//   this.modelYear = modelYear;
//   this.mileAge = mileAge;
//   this.description = description;

// };

const carForm = document.getElementById('carForm');
let carss = new Car([]);


function carInformationSubmit(e){
  e.preventDefault();

  addSelected();
  carss.saveToLocalStorage();
}

function addSelected(){
  let manufacture = carForm.manu.value;
  let model = carForm.model.value;
  let modelYear = carForm.modelY.value;
  let mileAge = carForm.mile.value;
  let description = carForm.desc.value;
  carss.addCar(manufacture, model, modelYear, mileAge, description);
}
// console.log(carForm);


carForm.addEventListener('submit', carInformationSubmit);
