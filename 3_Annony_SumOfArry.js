
var arr=[3,5,7,2,9,6,45,4,7]
console.log("sum elements in array")
var odd=function (arr){
var out=0
for(var i=0;i<arr.length;i++){
    out=out+arr[i]
}
  return out
}
console.log(odd(arr))
