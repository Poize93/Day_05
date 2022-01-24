
var arr=[18,4,6,7,90,32,43,44,65,1,7,5,5,18,89]
console.log(arr,"input array")

var dplct=function (arr){
   var out=[... new Set(arr)]
   return out
}
console.log(dplct(arr))
