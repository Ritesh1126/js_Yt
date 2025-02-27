//square pattern


let i , j ;
for (i = 1 ; i<=5 ; i++)// for external loop 
{
    let string = "";

    for ( j = 1 ; j <= 5 ; j++) // for internal loop
    {
        string += "* ";
    }

    console.log(string);
}