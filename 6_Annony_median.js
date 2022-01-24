
var arr1=[1,3,2,5,4]
var arr2=[6,8,9,7,10] 
console.log(`array1: ${arr1}
             array2: ${arr2}`)

var out

var mdn=function (arr1 ,arr2){
    out=arr1+","+arr2
    out=out.split(",")
    
   out.sort(function(a,b){return a-b})
   if(out.length%2==0){
       var fnl=(+out[out.length/2]+ +out[out.length/2 -1])/2
       
   }else fnl=out[parseInt(out.length/2)]
    return fnl
}
console.log(mdn(arr1 ,arr2), "Median")
