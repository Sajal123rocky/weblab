function outer(price)
{
    let tax=price*(18/100);
    function inner()
    {
        let total=price+tax;
        alert(total);
    }
    inner();
}
let inp=Number(prompt("Enter price"));
outer(inp);