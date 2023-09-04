const ButtonOne = document.querySelector<HTMLInputElement>("#ButtonOne")
const ButtonTwo = document.querySelector<HTMLInputElement>("#ButtonTwo")
const ButtonThree = document.querySelector<HTMLInputElement>("#ButtonThree")

function randomIntFromInterval(min: number, max: number) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const FDGTNUM = randomIntFromInterval(10000,99999)

ButtonOne?.addEventListener("click", () =>
    console.log(FDGTNUM)
)

ButtonTwo?.addEventListener("click", () =>
{ var L = 1
var R = FDGTNUM
var arr = Array.apply(null, Array(R+1)).map(Number.prototype.valueOf,1);
arr[0] = 0
arr[1] = 0

for(var i = 2;i<=R;i++){
   if(arr[i] == 0){
      continue;
   }
   for(var j = 2; i*j <= R; j++){
      arr[i*j] = 0;
   }
}

var pre = Array.apply(null, Array(R+1)).map(Number.prototype.valueOf,0);
for(var i = 1; i<= R;i++){
   pre[i] = pre[i-1] + arr[i];
}
const answer = pre[R]-pre[L-1]
console.log("The number of Primes in the Range of 1 to "+ FDGTNUM + " is " + answer);
})

ButtonThree?.addEventListener("click", () =>
    location.reload()
)