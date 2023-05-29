function outer(month)
{
    
    obj={1:"jan",2:"feb",3:"march",4:"april",5:"may",6:"june",7:"july",8:"aug",9:"sep",10:"oct",11:"nov",12:"dec"};
    function inner()
    {
        if(month>=1&&month<=12)
        {
            let num=Math.trunc(month);
            console.log(num);
            //alert(obj[num]);
            console.log(obj[num]);
            document.getElementById('res').innerHTML=obj[num];
        }
        else
        {
            document.getElementById('res').innerHTML='bad number';
        }
    }
    inner();
}
let inp=Number(prompt("Enter a month"));
console.log(inp);
outer(inp);
//let inp=Number(document.getElementById("month").value);
//let a=outer(inp);
//let b=a();
//document.getElementById('res').innerHTML=b;

// function outer(month)
// {
//     let obj={1:"jan",2:"feb",3:"march",4:"april",5:"may",6:"june",7:"july",8:"aug",9:"sep",10:"oct",11:"nov",12:"dec"};
//     var inner=function(){
//         if(month>=1&&month<=12)
//         {
//             console.log(month);
//             let num=Math.trunc(month);
//             return obj[num];
//         }
//     }
//     return inner;
// }
