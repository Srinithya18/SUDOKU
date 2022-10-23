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
    return arr;
}

const Result = (board) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === 0) {
                for (let c = 1; c <= 9; c++) {
                    if (isValid(board, i, j, c)) {
                        board[i][j] = c;
                        if (Result(board)) {
                            return true;
                        }else{
                            board[i][j] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
};

const isValid = (board, row, col, c) => {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] == c) return false;
        if (board[row][i] == c) return false;
    }

    const x = ~~(row / 3) * 3;
    const y = ~~(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[x + i][y + j] == c) {
                return false;
            }
        }
    }
    return true;
};

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
// var data=[
// '4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......',
// '52...6.........7.13...........4..8..6......5...........418.........3..2...87.....',
// '6.....8.3.4.7.................5.4.7.3..2.....1.6.......2.....5.....8.6......1....',
// '48.3............71.2.......7.5....6....2..8.............1.76...3.....4......5....',
// '....14....3....2...7..........9...3.6.1.............8.2.....1.4....5.6.....7.8...',
// ]

function loadText(){
    fetch('sudoku.json')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{

        console.log(typeof(data),Object.keys(data).length)
        var size=Object.keys(data).length
        var randomNumber=(Math.floor(Math.random()*(size)));
        console.log(randomNumber);
        for(var i=1;i<=9;i++){
            for(var j=1;j<=9;j++){
                var s=i.toString() + j.toString();
                var index=((i-1)*9+(j-1));
                if(data[randomNumber][index]==='.')
                    document.getElementById(s).value='0'; 
                else
                    document.getElementById(s).value=data[randomNumber][index]; 
            }
        }
    })
}

// console.log("OUTSIDE");


function fillRandom() {
    // var arr=[[5,3,0,0,7,0,0,0,0],
    //         [6,0,0,1,9,5,0,0,0],
    //         [0,9,8,0,0,0,0,6,0],
    //         [8,0,0,0,6,0,0,0,3],
    //         [4,0,0,8,0,3,0,0,1],
    //         [7,0,0,0,2,0,0,0,6],
    //         [0,6,0,0,0,0,2,8,0],
    //         [0,0,0,4,1,9,0,0,5],
    //         [0,0,0,0,8,0,0,7,9]]
    var randomNumber=Math.floor(Math.random()*(data.length));
    console.log(randomNumber);
    for(var i=1;i<=9;i++){
        for(var j=1;j<=9;j++){
            var s=i.toString() + j.toString();
            var index=((i-1)*9+(j-1));
            if(data[randomNumber][index]==='.')
                // data[randomNumber][index]='0';
                document.getElementById(s).value='0'; 
            else
                document.getElementById(s).value=data[randomNumber][index]; 
        }
    }
    // for(var i=1;i<=81;i++){
    //     var s=(Math.floor(i/9)+1).toString()+(i%9).toString();
    //     console.log(s);
    //     document.getElementById(s).value=data[randomNumber][i-1];
    // }
}

let solve = function(arr) {
    for(var i=1;i<=9;i++){
        for(var j=1;j<=9;j++){
            var s=i.toString() + j.toString();
            document.getElementById(s).value=arr[i-1][j-1]; 
        }
    }
}
function solveFill(){
    var arr=getVal()
    Result(arr)
    solve(arr)
}
var isValidSudoku = function(board) {
    for(let i = 0; i < 9; i++){
        let row = {}
        let col = {}
        let box = {}
        for(let j = 0; j < 9; j++){
            let each_row = board[i][j]
            let each_col = board[j][i]
            let each_box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
            if(each_row != 0){if(row[each_row] == null){ row[each_row] = each_row } else return false}
            if(each_col != 0){if(col[each_col] == null){ col[each_col] = each_col } else return false}       
            if(each_box != 0){if(box[each_box] == null){ box[each_box] = each_box } else return false}
        }
    }
    return true
};
document.getElementById("status").style.display="none"
function check(){
    arr=getVal()
    var x=isValidSudoku(arr)
    console.log(x)
    if(x===true)
        document.getElementById("status").classList.add("alert-info")
    else
        document.getElementById("status").classList.add("alert-info")
    document.getElementById("status").style.display="block"
    
    document.getElementById("status").innerHTML=x;
}

document.getElementById("get").onclick = check;
document.getElementById("solve").onclick = solveFill;
document.getElementById("fill").onclick = loadText;