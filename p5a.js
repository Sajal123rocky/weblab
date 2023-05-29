function pluralize(count,noun)
{
    if(count==1)
    return count+" "+noun;
    else if(noun=='geese'||noun=='sheep')
    return count+" "+noun;
    else
    return count+" "+noun+"s"

}
console.log(pluralize(2,'sheep'));