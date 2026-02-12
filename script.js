/* Print First 3 odd Number 

let counter = 0;
for ( let i = 0 ; i < 21 ;i ++){
    if (counter == 3) break;
    if ( i % 2 !== 0)
    {
        console.log(i);
        counter++
    }
}

*/ 
/*Take a user input number of 5 and describe only the possitive integers*
  note --> +prompt - ye integer value print krne k liye command dena jaruri hai */

let counter = 0;
let num = +prompt("number do :");
for ( let i = 1 ; i < num ; i ++)
{
    if (num > 0) 
    counter ++;
}
console.log(counter);
