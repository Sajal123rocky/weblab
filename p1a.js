function translate(a)
{
    let str="";
    for(let i=0;i<a.length;i++)
    {
        c=a.charAt(i);
        if(c!='a'&&c!='e'&&c!='i'&&c!='o'&&c!='u'&&c!=" ")
        {
            str=str+c+"o"+c;
            
        }
        else
        str=str+c;
    }
    console.log(str);
}
translate("this is fun");