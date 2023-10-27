const MOD = 1000000007;
function countOriginalS(n, s){
    const dp = new Array(n+1).fill(0);
    dp[0]=1;
    for(let i =1;i<=n;i++){
        if(s[i-1]!=='0'){
            dp[i]+=dp[i-1];
        }
        if(i>=2&&parseInt(s.slice(i-2))>=10&&parseInt(s.slice(i-2,i))<=26){
            dp[i]+=dp[i-2];
        }
        dp[i]%=MOD;
    }
    return dp[n]%MOD;
}
const readline = require('readline');
const rl = readline.createInterface({input:process.stdin,output:process.stdout})
let n;
let s;
rl.on('line',(line)=>{
    if(!n){
        n=parseInt(line.trim());
    }else{
        s=line.trim();
        rl.close();
    }
    
}).on('close',()=>{
    const result = countOriginalS((n,s));
    console.log(result);
})