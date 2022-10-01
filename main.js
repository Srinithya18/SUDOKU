// var i11 = document.getElementById("11").value;

// console.log(i11);
function getVal() {
    const val11 = document.getElementById("11").value;
    const val12 = document.getElementById("12").value;
    const val13 = document.getElementById("13").value;
    const val21 = document.getElementById("21").value;
    const val22 = document.getElementById("22").value;
    const val23 = document.getElementById("23").value;
    const val31 = document.getElementById("31").value;
    const val32 = document.getElementById("32").value;
    const val33 = document.getElementById("33").value;
    console.table([val11, val12, val13], [val21, val22, val23],[val31, val32, val33]);
}

document.getElementById("get").onclick = getVal;