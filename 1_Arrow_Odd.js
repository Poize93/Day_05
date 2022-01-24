
var arr=[18,4,6,7,90,32,43,44,65,1,7,5,89]
console.log(arr,"input array")

var odd=(arr)=>{
    out=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            out.push(arr[i])
        }
    } return out
    }

console.log(odd(arr))
