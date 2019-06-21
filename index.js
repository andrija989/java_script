/*function multiply(x,y) {
  return x*y
}

console.log(multiply(5,4))

multiplyArrow = (x,y) => x * y
console.log(multiplyArrow(5,4))

function getPerson(name,lastName) {
  return {name:name, lastName:lastName}
}
var person = getPerson('Pera','Peric')

console.log(person);

getPersonArrow =(name,lastName) => ({name:name,lastName:lastName})
console.log(getPersonArrow('Andrija','Perovic'))

function Cat(name) {
  this.name = name
}

Cat.prototype.sayName = () => {
  console.log(this === window)
  return this.name
}

let bestCat = new Cat('Sojka')
bestCat.sayName()

sayHello = () => console.log('Hello World')
sayHello();

integerSum = (x,y,z) => console.log(x+y+z)
integerSum(1,2,3)

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));

var Entity = function(name, delay) {
  this.name = name;
  this.delay = delay;  
}

Entity.prototype.greet = function() {
    setTimeout = (() => {
        console.log('Hi, I am ' + this.name)
    }, this.delay)
}

var java = new Entity('Java', 5000)
var cpp = new Entity('C++', 30)

java.greet()
cpp.greet()

function Test(name) {
  this.name=name;
}

Test.prototype.firstFunction = function() {
  setTimeout(() =>{console.log('class this', this);
    console.log(this.name);
  },100);
}

Test.prototype.secondFunction = function() {
  setTimeout(function() {console.log('class this', this);
    console.log(this.name);
  }.bind(this),200)
}

Test.prototype.thirdFunction = function() {
  setTimeout(function() {console.log('window this',this);
    console.log(this.name);
  },200)
}

var test = new Test('Pera');

test.firstFunction();
test.secondFunction();
test.thirdFunction();


class Hero {
  constructor(name,level){
    this.name = name
    this.level = level
    
  }
  
  levelUp() {
    this.level++
  }
}

let Kimi = new Hero('Kimi',1);
Kimi.levelUp();
console.log(Kimi);
Kimi.levelUp();
console.log(Kimi);



class Mage extends Hero {
  constructor(name,level,spells) {
    super(name,level)
    this.spells = spells
  }
}

let Gogi = new Mage('Gogi',2,'Balista shot');
console.log(Gogi);


class Book {
  constructor(title, author, numberOfPages) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
  }
  
  static compare(book1,book2) {
    return book1.numberOfPages - book2.numberOfPages
  }
}

let books = [
    new Book('Little Prince', 'Antoine de saint',134),
    new Book('The Hobbit', 'J.R.R. Tolkin',210),
    new Book('And','Harry Ling',7)
  ]
  
console.log(books.sort(Book.compare))


class Person {
  constructor(name,lastName){
    this.name = name
    this.lastName = lastName
  }
  
  get fullName() {
    return this.name + " " + this.lastName
  }
}

var andrija = new Person('Andrija','Perovic')
console.log(andrija.fullName);


class Circle {
  constructor(radius){
    this.radius = radius
  }
  
  get area() {
    return Math.PI * this.radius * this.radius
  }
  
  set area(n) {
    this.radius = Math.sqrt(n/Math.Pi)
  }
}
var krug = new Circle(22)
console.log(krug.area)


class Shape {
  constructor() {
    if(this.constructor === Shape ) {
      throw new Error ('Errrrororororo')
    }
  }
}
var krug = new Shape()


class Point {
  constructor(x,y) {
    this.x = x
    this.y = y
  }
  
  plus(point) {
    return new Point(this.x + point.x, this.y + point.y)
  }
}

console.log(new Point(2, 2).plus(new Point(3, 1)))

*/

// drugi zadatak

class Character {
  constructor() {
    if(this.constructor === Character ) {
      throw new Error ('Character is abstract and can`t be created')
    }
    this.x = Math.floor((Math.random() * 10) + 1)
    this.y = Math.floor((Math.random() * 10) + 1)
    Character.increaseCount();
    
  }
  
  static increaseCount() {
    this.count += 1;
  }
  
  static setCount() {
    this.count=0;
    
  }
 
}

class PlayerCharacter extends Character {
  constructor(x,y){
    super(x,y)
  }
    set changePosition([x,y]) {
      if(x > 10) {
        throw new Error ('X is out of bounds')
      } else {
        this.x = x;
      }
      if(y > 10) {
        throw new Error ('Y is out of bounds')
      } else {
        this.y = y;
      }
  }
}

class NonPlayerCharacter extends Character {
  constructor(x,y){
    super(x,y)
  }
  set changePosition([x,y]) {
    if(x > 10) {
      throw new Error ('X is out of bounds')
    } else {
      this.x = x;
    }
    if(y > 10) {
      throw new Error ('Y is out of bounds')
    } else {
      this.y = y;
    }
  }
}

Character.setCount();
var player = new PlayerCharacter();
console.log(player)
var gogi = new NonPlayerCharacter();
console.log(gogi);
gogi.changePosition=[10,5];
console.log(gogi);

console.log(Character.count);