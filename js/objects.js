// Fun array!

const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
  }
]

/* Let's experiment with this!!!! 
This would be an object into the Dom
 logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
This would be a simple string into the Dom
 logger.innerHTML += message + '<br />';
 */
arrayNums = [4, 6, 7, 8, 2, 3, 5, 9, 0, 1, 2, 6, 4, 5, 8, 25]
item = "shmedleyRoll"

// index = "lardmouth"
const dice = {
  sides: 106,
  roll() {
    return Math.floor(this.sides * Math.random()) + 1;
  }
}

// const myMaths = {
function squareMe(x) {
  return x * x;
}

function mean(array, callback) {
  if (callback) {
    array.map(callback);
  }
  const total = array.reduce((a, b) => a + b);
  return total / array.length;
}
//}

document.querySelector("#sandbox1").textContent = mean([4, 5, 6], x => x + 100);

// document.querySelector("#sandbox1").textContent =
//  `${squareMe(3)} : ${mean(arrayNums, squareMe)}`;


hehadtoSplit = 'Hello World! whats up man 1 2 3 4?'.split(/\s+/)
document.querySelector("#sandbox2").textContent = `${hehadtoSplit}`;

addEventListener('click', () => alert(`Click o Rama`));

// const mapValues = Array.from(map, ([key, value]) => value);
// console.log(value);
// document.querySelector("#sandbox1").innerHTML = value;

// document.querySelector("#sandbox0").innerHTML = `test`;