var numbers = [4, 5, 18, 23, 42];

d3.selectAll("div").data(numbers);


var letters = [
  {name: "A", frequency: .08167},
  {name: "B", frequency: .01492},
  {name: "C", frequency: .02780},
  {name: "D", frequency: .04253},
  {name: "E", frequency: .12702}
];

function name(d) {
  return d.name;
}

d3.selectAll("div").data(letters, name);
