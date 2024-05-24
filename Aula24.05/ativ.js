let print = console.log

let carName = "Maverick"
let x = 5
let y = 10
let z = print(x+y)

//------------------------

let firstName = "John "; let lastName = "Doe "; let age = 35
let person = firstName + lastName + age
print (person)

//-------------------------

print(x*y)
let a = 15
let b = 9
print(a%b) 

y=5
x=10
x=x+y
print(x)
x=10
x=x*y
print(x)

//------------------

let length = 16; //Number
let lastNam = "Johnson"; //String
const d = {
  firstName: "John",  //Object
  lastName: "Doe"
};

//------------------------

function myFunction() {
   print ("Hello Wolrd!");
 return ("Hello");
}
console.log(myFunction())

//-----------------------------

const pessoa = {
    name: "John",
    age: 50,
  }
  print (`${pessoa.name} tem ${pessoa.age} anos`)

  //----------------------------------

  let txt = "Hello World!";
let r = txt;
print(r)

let str1 = "Hello ";
let str2 = "World!";
print (str1+str2)

let maiusc = txt.toUpperCase()
print(maiusc)
print (txt.replaceAll("Hello", "Welcome"))

//---------------------------------------

let cars = ["Volvo", "Jeep", "Mercedes"];
print (cars.length)

let fruits = ["Banana", "Orange", "Apple"];
fruits.pop()
print(fruits)

fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi")
print (fruits)

fruits = ["Banana", "Orange", "Apple"];
fruits.splice(1,2)
print(fruits)

//---------------------------------------

x = 10
y = 9
if(x > y){
    print("Hello World!")
}else{
print("Goodbye")
}

fruits = "Banana"

switch (fruits){
    case "Banana":
   print("Olá!")
break;
    case "Maçã":
   print("Bem-Vindo!")
break;
    default:
   print("Nem um, nem outro.")

}

//---------------------------------------

let i
for(i = 0; i <= 9; i++)
{console.log(i)}

fruits = ["Apple", "Banana", "Orange"];
for(e = 0; e < 4; e++){ //Pegará apenas 5 números
    const percorrer = fruits [e]
    console.log(percorrer)
}

let o = 0
while (o != 10){
    print(o)
    o++
}