// TODO: Create HTML code from cars JSON

const carsJSON = '[{"make":"Ford","model":"Mustang","year":2010,"color":"black"},{"make":"Chevy","model":"Corvette","year":1984,"color":"red"},{"make":"Jeep","model":"Wrangler","year":1999,"color":"silver"}]'

const cars = JSON.parse(carsJSON);

console.log(cars[0]);

let output = "<ul>";

// this.make, this.model, this.year
cars.forEach(function(c){
  output += `<li>Here's a ${c.color} ${c.year} <span>${c.make}</span> ${c.model}</li>`;
});

output += "</ul>"

document.querySelector("#list-container").innerHTML = output;
