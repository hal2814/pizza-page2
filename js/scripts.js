//back end

function pizza(pizzaType,pizzaSize,cheese,sauce,price){
  this.pizzaType = pizzaType;
  this.pizzaSize = pizzaSize;
  this.toppings = [];
  this.cheese = cheese;
  this.sauce = sauce;
  this.price = price;
};

pizza.prototype.getType = function (type,price) {
  this.pizzaType = type;
  this.price += price;
};

pizza.prototype.getSize = function (size,price) {
  if(size==="Small (13 inch pie)"){

  }
  if(size==="Medium (15 inch pie + $6)"){

  }
  if(size==="Large (18 inch pie + $11)"){

  }
  this.pizzaSize = size;
  this.price += price;
};

pizza.prototype.getToppings = function (toppers,price) {
  for(var i=0;i<toppers.length;++i){
    this.toppings.push(toppers[i]);
  };
  this.price += (toppers.length *2);
};

function pizzaChoice(pizzaType,pizzaObject){
  if(pizzaType==="The Kenton"){
    pizzaObject.getType(pizzaType,16);
  }
  if(pizzaType==="The Goose Hollow"){
    pizzaObject.getType(pizzaType,15);
  }
  if(pizzaType==="The Pearl"){
    pizzaObject.getType(pizzaType,14);
  }
  if(pizzaType==="The Downtown"){
    pizzaObject.getType(pizzaType,14);
  }
};



//back end

$(document).ready(function(){

});
