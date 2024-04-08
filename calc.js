function displaydata(n){
    output.value += n;

}

function cleardisplay(n){
    output.value = ""
}

function deletedisplay(n){
    output.value = output.value.slice(0,-1);
}


// function addition(a,b)
// {
//     return a + b;
// }

// function subtract(a,b)
// {
//     return a - b;
// }

// function multiplication(a,b)
// {
//     return a * b;
// }

// function division(a,b)
// {
//     return a / b;
// }



function result()
{
    if(output.value.includes('+'))
    {
        r=[];
        a=output.value;
        r=a.split('+')
        output.value=parseInt(r[0]) + parseInt(r[1])
    }

    else if(output.value.includes('-'))
    {
        r=[];
        a=output.value;
        r=a.split('-')
        output.value=parseInt(r[0]) - parseInt(r[1])
    }

    else if(output.value.includes('*'))
    {
        r=[];
        a=output.value;
        r=a.split('*')
        output.value=parseInt(r[0]) * parseInt(r[1])
    }

    else if(output.value.includes('/'))
    {
        r=[];
        a=output.value;
        r=a.split('/')
        output.value=parseInt(r[0]) / parseInt(r[1])
    }
}