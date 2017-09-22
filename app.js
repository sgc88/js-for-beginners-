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

function myword(){
    alert("What is your name?");
}


var yword = "hello" + myword;

function getAverage(a,b,c, d, e, f){
    var average = (a+b+c+d+e+f) / 2;
    console.log(average);
    return average;s
}

getAverage(5,7);

var myresult = getAverage(5,7,66,21,90,12);
console.log("the average is " + myresult);





















    



