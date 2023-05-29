const readline=require('readline');
function vowelCount(){
    const rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    rl.question("Enter a string",(input)=>{
        rl.close();
        const vowelfreq={'a':0,'e':0,'i':0,'o':0,'u':0};
        let count=0;
        const res=input.toLowerCase();
        for(let i=0;i<input.length;i++)
        {
            let c=res.charAt(i);
            if('aeiou'.includes(c)){
            if(vowelfreq[c])
            vowelfreq[c]++;
            else
            vowelfreq[c]=1;
            }
        }
        for(let vowel in vowelfreq)
        {
        console.log(vowel+" "+vowelfreq[vowel]);
        }
    
    });
}
vowelCount();