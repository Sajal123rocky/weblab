let q=[];
function enque(b)
{
    q.push(b);
}
function deque(b)
{
    q.shift();
}
function display()
{
    if(q.length==0)
    console.log("empty")
    else
    for(let i=0;i<q.length;i++)
    console.log(q[i]);
}
module.exports={
    enque:enque,
    deque:deque,
    display:display
}