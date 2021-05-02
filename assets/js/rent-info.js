
'use strict';

const carForm = document.getElementById('carForm');
let carss = new Car([]);


function carInformationSubmit(e){
  e.preventDefault();

  addSelected();
  carss.saveToLocalStorage();
}

function addSelected(){
  let price = carForm.price.value;
  let manufacture = carForm.manu.value;
  let model = carForm.model.value;
  let modelYear = carForm.modelY.value;
  let mileAge = carForm.mile.value;
  let description = carForm.desc.value;
  let myImg = carForm.myImg.value;
  carss.addCar(manufacture, model, modelYear, mileAge,price, description, myImg);
}
// console.log(carForm);


carForm.addEventListener('submit', carInformationSubmit);
