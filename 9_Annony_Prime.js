
var arr=[2,18,4,6,7,90,32,43,44,65,17,5,89,2]
console.log(arr,"input array")

var prm=function (arr){
    var out=[]
    for(var k=0;k<arr.length;k++){
        inp=arr[k]
        
        if(inp==2 || inp==3 || inp==5 || inp==7){
            out.push(inp)
        }else {
            for (var i=2;i<=inp/2;i++){
                flag=true
                if(inp%i==0){
                    flag=false
                   break      
                }
            }if(flag==true){
                out.push(inp)
            }
        }
    }
    return out
    }
    console.log(prm(arr))

