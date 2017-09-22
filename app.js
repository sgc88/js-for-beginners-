/* alert("hello world");


//alert("hi again");
//var uLikeMeat = true;

//var myNum = 11;

if(uLikeMeat){
    document.write("u like meat");
    
} else{
    document.write("u hate meat");
    
}

if(uLikeMeat){document.write("here is the meat menu"); */



// LESSON 14;

/*var myAge = 70;


if(myAge > 30){
    document.write("you are over 30");
    
}else if( myAge > 20){
    document.write("you are over 20");
    
}else if(myAge > 10){
    document.write("you are over 10");
    
} else{
    document.write("you arenot over 10");
    
} */

// LESSON 15 :

/* var myAge = 26 ;

if(myAge < 18 ||  18 && myAge > 30 || myAge === 25){
    document.write("you aint coming!");
    
} else{
    document.write("You camn come to the party!");
    
} */

// LESSON 16:

/*var age = 5;
while(age < 10){
    
    console.log("your age is less than 10");
    age++;
}
document.write("you are now over 10");

//LESSON 17:


var links = document.getElementsByTagName("a");

for (age = 0; age <links.length; age++){
    
    console.log("This is the link number" + age);
    
}

document.write("you are now over 10"); */


//LESSON 18:

 /* for (age = 0; age < 10; age++){
    
    if(age === 5 || age === 3){
        
        continue;
    }
    
    console.log(age);
    
    if(age === 7){
        
        break;
    }
}

console.log("I have broken out of the loop"); */

//LESSON 19;


/* var links = document.getElementsByTagName("a");

for(i = 0; i < links.length; i++){
    
    links[i].className = "link-" +i;
}
*/

// LESSON 20: FUNCTIONS

// LESSON 21: LOCAL VS GLOBAL

function myWord(){
    alert("What is your name?");
}


var yWord = "hello" + myWord; // GLOBAL VAR

//we can also declare local var into global var
var average =0;

function getAverage(a,b){
    average = (a+b) / 2; // LOCAL VAR
    console.log(average);
    return average;s
}

getAverage(5,7);

var myResult = getAverage(5,7);
console.log("the average is " + myResult);

// example for global

function logResult(){

    console.log("the averageis " + myResult + " inside the function");
};
 logResult();


//LESSON 22 : NUMBERS

var a= 5;
var b= 5;
console.log(a+b);
console.log(typeof (a+b));

console.log(Math.round(7.5)); // round it up

console.log(Math.floor(7.5)); // round it down no matter what
console.log(Math.ceil(7.5)); // round it up no matter what
console.log(Math.max(7,8,9,3)); // always picks biggest number
console.log(Math.PI); // gives a number for PI


//LESSON 23: NaN

var c = "7";
var d = 5;
console.log(c*d); // js recognize "7" as a number

var c = "apple";
var d = 5;
console.log(c*d);// js runs the code as NaN saying that check your code cus something is wrong


if(!isNaN(c)){
    console.log("that aint a number");


}else{
    console.log("this is " + (c*d));
}
// !isNaN : meaning not-not;





























    



