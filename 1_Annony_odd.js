
var arr=[3,5,7,2,9,6,45,4,7]
console.log("finding odd numbers")
var odd=function (arr){
var out=[]
for(var i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        out.push(arr[i])
    }
}
  return out
}
console.log(odd(arr))
