//back end

//pizza object
function pizza(){
  this.pizzaType;
  this.pizzaSize;
  this.toppings = [];
  this.price = 0;
};

pizza.prototype.total = function (finalTotal) {
  this.price = finalTotal;
  return this.price;
};

pizza.prototype.getType = function (type) {
  if(type==="The Kenton"){
    this.price += 16;
  }
  if(type==="The Goose Hollow"){
    this.price += 15;
  }
  if(type==="The Pearl"){
    this.price += 14;
  }
  if(type==="The Downtown"){
    this.price += 14;
  }
  this.pizzaType = type;
};

pizza.prototype.getSize = function (size) {
  if(size==="Small (13 inch pie)"){
    this.price += 0;
  }
  if(size==="Medium (15 inch pie + $6)"){
    this.price += 6;
  }
  if(size==="Large (18 inch pie + $11)"){
    this.price += 11;
  }
  this.pizzaSize = size;
};

pizza.prototype.getTopping = function (toppin) {
  this.toppings.push(toppin);
  this.price += 2;
};

//back end
$(document).ready(function(){
  var pizzaOrdered = new pizza();
  $("#addButton").click(function(event) {
    var topping = $("#selectTopping").val();
    pizzaOrdered.getTopping(topping);
  });
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    //type
    var pizzaBase = $("#selectPizza").val();
    pizzaOrdered.getType(pizzaBase);
    //size
    var SizeOfPizza = $("#selectPizzaSize").val();
    pizzaOrdered.getSize(SizeOfPizza);
    //toppings
    $("#titleSection").text("You Ordered: ")
    $("#orderSizeSection").text(pizzaOrdered.pizzaSize);
    $("#orderTypeSection").text(pizzaOrdered.pizzaType);
    $("#orderToppingSection").text(pizzaOrdered.toppings);
    $("#receiptSection").text(pizzaOrdered.price);
    pizzaOrdered = new pizza();
  });
});
