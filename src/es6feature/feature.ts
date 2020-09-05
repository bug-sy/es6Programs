
//let p = new Person() cannot hoist
// class Person{

import { nextTick } from "process"

// //constructor initializing an object and for every class there can only be one constructor
//     constructor(name){
//         this.name = name;
//         console.log(this.name + " constructor")
//     }
// //static method
//     static staticMethod(){
//         console.log("static method")
//     }

//     //greet method
//     greet(){

//     }
// }

// let p = new Person('Chandler')
// Person.staticMethod()

// //classes doesn't support hoisting

// console.log(p.greet === Person.prototype.greet)

//class inheritance
// class Pers{
//     constructor(name){
//         console.log(name + " Person constructor")
//     }

//     getID(){
//         return 10;
//     }
// }

// class Employee extends Pers{
//     constructor(name){
//         super(name);
//         console.log(name + " Employee constructor")
//     }

//     getID(){
//         return super.getID();
//     }
// }

// let e = new Employee("chandler")
// console.log(e.getID())

//import statement are hoisted
// import { fname}
// fname are read only but obje{ name : } can be changed

// default export
// let faname = " chandler"

// export default faname;

// leave the curly braces
// import firstName from  ''

//sets and maps

// let mySet = Object.create(null);
// mySet.id = 0;
// if(mySet.id ){
//     console.log(" id exists")
// }

// let myMap = Object.create(null);
// myMap.name = "Chandler"
// let val = myMap.name
// console.log(val)

// myMap[100] = "Hello"
// console.log(myMap["100"])

// let ob1 = {}
// let ob2 = {}

// myMap[ob1] = "World"

// console.log(myMap[ob1])
// console.log(myMap[ob2])
// console.log(ob1.toString())
// console.log(ob2.toString())

// let mySet = new Set();

// mySet.add("Hello")
// mySet.add(1)
// mySet.add(ob1)//object cannot converted to string hence size = 4 ,coz unique
// mySet.add(ob2)
// console.log(mySet.size)

// let newSet = new Set([1,2,3,4,1,1,1])
// console.log(newSet.size)
// let chainSet = new Set().add("hello").add("world")
// console.log(chainSet.size)

// console.log(newSet.has(5))

//weaksets
// let mySet = new Set()
// let key = {}
// mySet.add(key)
// console.log(mySet.size)
// key = null;
// console.log(mySet.size)
// key = [...mySet][0]

//weakset, to delete the reference to object ;for garbage collection

// let set = new WeakSet()
// let key = {}
// set.add(key)
// console.log(set.has(key))

// key = null;
// console.log(set.has(key))


// let myMap = new Map()
// myMap.set("fname","Chandler")
// myMap.set("age",8)

// console.log(myMap.get("fname"));

// let ob1 = {

// }
// let ob2 = {

// }

// myMap.set(ob1,10)
// myMap.set(ob2,20)
// myMap.clear()
// console.log(myMap.get(ob1))

// let myMap = new Map([
//     ["fname", "Chandler"],
//     ["lname","Bing"]
// ])

// for(let entry of myMap.keys()){
//     console.log(key`${entry[0]} -> ${entry[1]}`)
// }
// console.log("HI")

// for( let entry of myMap.entries()){
//     console.log()
// }


// let s = Symbol("First Symbol")
// console.log(typeof s)
// console.log(s.toString())

// let s2 = Symbol("Test")
// let s3 = Symbol("Test")

// console.log(s2 === s3)// symbol always create unique id

// let s4 = Symbol.for('RegSymbol')//global registry in this description
// let s5 = Symbol.for('RegSymbol')

// console.log(s4 === s5 )

// console.log(Symbol.keyFor(s5))


// //use symbol in object property
// let fname = Symbol("FirstName") //generates unique property even we overwrite name
// let person = {
//     [fname]: "Chandler"
// }

// console.log(Object.getOwnPropertySymbols(person))//static method

// let str = "Hello"
// let arr = [1,2,3]
// let num =5;//no for of loop
// let obj = {name : "Chandler"}// for of cannot be used

// console.log("For Strin " + typeof str[Symbol.iterator])



// let iterable = [1,2,3];

// function createIterator(array){
//     let count = 0;
//     return {
//         next :function(){
//             return count < array.length?
//             {value: array[count++],done:false}:
//             {value : undefined,done:true}
//         }
//     }
// }

// let myIterator = createIterator(iterable)

// console.log(myIterator.next())
// console.log(myIterator.next())
// console.log(myIterator.next())
// console.log(myIterator.next())


// Iterable{
//     [symbol.Iterator]() : Iterator
// }

// Iterator{
//     next() : IResultObj
// }

// IResultObj{
//     value : any
//     done : boool
// }

//javascript object iterate it 

// let person = {
//     fname : "Chandler",
//     lname : "Bing"
// }




// person[Symbol.iterator] = function(){
//   let properties = Object.keys(person);
//   let count =0;
//   let isDone = false;
//   let next = () => {
//     if(count > properties.length){
//       isDone =true;
//     }
//     return{done : isDone, value : this[properties[count++]]}
//   }
//   return { next}
  
  
// }

// for (let p of person){
//     console.log(p)
// }

//pausing of execution

//pausing of execution

// function *createGenerator(){
//   yield 1;
//   console.log("After first yield")
//   yield 2;
// }


// let myGen = createGenerator()

// console.log(myGen.next())
// console.log(myGen.next())
// console.log(myGen.next())
// console.log(myGen.next()) in place of custom iterator above System.generator, when your cannot iterate using for of loop