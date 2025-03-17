// create a function of an array thats takes as an input , and returns the user that age > 18 and are male 

function filterusers(arr){
    return arr.filter(users => users.age >= 18 && users.gender === "male");


}

const users = [{
    name : "Ritesh", 
    age : 20 , 
    gender : "male"
},
{
    name : "Sampda" , 
    age : 21 ,
    gender : "female"
},
{
    name : "Roman" , 
    age : 19 ,
    gender : "male"
}

];

console.log(filterusers(users));