
var arr=[18,4,6,7,90,32]
var k=2 
console.log(arr,"input array")
console.log(`Rotate an array by k=${k} times`)
var out=[]

var rtt=function (arr,k){
   out=arr.slice(k,arr.length)+","+arr.slice(0,k)
   
   return out.split(",").map(Number)
}
console.log(rtt(arr,k))
