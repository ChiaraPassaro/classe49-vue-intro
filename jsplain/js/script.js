// intercettiamo la tastiera
const inputName = document.getElementById('name');
const inputLastName = document.getElementById('lastname');
const spanFirstName = document.getElementById('firstname');
// console.log(spanFirstName);
const spanLastName = document.getElementById('lastnamespan');
// console.log(spanLastName);


inputName.addEventListener('keyup', function () {
  spanFirstName.innerHTML = this.value;
});

inputLastName.addEventListener('k', function () {
  spanLastName.innerHTML = this.value;
});

// //le funzioni e il this
// console.log(this);
// function myFunction(name) {
//   console.log(name);
//   console.log(this);
// }

// myFunction('Pippo');

function Cat() {
  this.setName = function (name) {
    this.name = name;
  }

  this.setColor = function (color) {
    this.color = color;
  }

  this.getName = function () {
    console.log(this.name);
  }
  this.getColor = function () {
    console.log(this.color);
  }

  return this;
}

// new Date()
let pluto = new Cat();
// let pippo = new Cat();
console.log(pluto);
pluto.setName('pluto');
pluto.getName();
// pippo.getName();