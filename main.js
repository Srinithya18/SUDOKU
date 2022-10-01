function getVal() {
    let arr=[];
    for(var i=1;i<=9;i++){
        let temp=[];
        for(var j=1;j<=9;j++){
            var s=i.toString() + j.toString();
            var x=document.getElementById(s).value;
            temp.push(parseInt(x))
        }
        arr.push(temp);
    }
    console.table(arr);
}

function clearAll() {
    for(var i=1;i<=9;i++){
        for(var j=1;j<=9;j++){
            var s=i.toString() + j.toString();
            document.getElementById(s).value="";
        }
        console.log("row"+i+"cleared")
    }
    console.log("all cleared")
}

function fillRandom() {
    var arr=[[5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]]
    for(var i=1;i<=9;i++){
        for(var j=1;j<=9;j++){
            var s=i.toString() + j.toString();
            document.getElementById(s).value=arr[i-1][j-1];
        }
    }
}


document.getElementById("get").onclick = getVal;
document.getElementById("clear").onclick = clearAll;
document.getElementById("fill").onclick = fillRandom;