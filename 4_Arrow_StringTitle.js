var arr=["rahul" , "ajay" , "bhusan", "nikita"]
var ttlCs=(arr)=>{
var a=[]
var out=[]
for(var i=0; i<arr.length;i++){
    a=arr[i].split("")
    upr=a[0].toUpperCase()
    a.splice(0,1,upr)
    out.push(a.join(""))
}
  return out
}

console.log(ttlCs(arr))
