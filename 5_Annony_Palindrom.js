var arr=[22,5,454,64,23,55,76,6776,87]
var plndrm=function (arr){
var out=""
var out=[]
for(var i=0; i<arr.length;i++){
    var sum=""
    temp=arr[i]
    while(temp>=1){
        rem=temp%10
        temp=parseInt(temp/10)
        sum=sum+rem
        
    }
    if(arr[i]==sum){
        out=out+arr[i]+" "
    }
}
  return out
}

console.log(plndrm(arr))
