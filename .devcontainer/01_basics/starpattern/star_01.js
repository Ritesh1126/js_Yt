//square pattern


let i , j ;
for (i = 1 ; i<=5 ; i++)// for external loop --> ye number of lines ko significance ko denote krta hai ...
{
    let string = ""; 

    for ( j = 1 ; j <= 3 ; j++) // for internal loop --> ye each line star ko represent krta hai 
    {
        string += "* ";
    }

    console.log(string);
}