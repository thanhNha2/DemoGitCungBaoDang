document.getElementById('bai1').onclick = function () {
    // input: lấy 3 số từ người dùng nhập vào thông qua thẻ input
    var so1 = document.getElementById('so1').value;
    var so2 = document.getElementById('so2').value;
    var so3 = document.getElementById('so3').value;
    // output: in ra màn hình dãy số tăng dần
    var tam;
    // xử lí:
    //  chuyển số bé nhất vào so1
    if (Number(so1) > Number(so2)) {
        tam = so1;
        so1 = so2;
        so2 = tam;
    }
    if (Number(so1) > Number(so3)) {
        tam = so1;
        so1 = so3;
        so3 = tam;
    }
    // chuyển so2 về nhì
    if (Number(so2) > Number(so3)) {
        tam = so2;
        so2 = so3;
        so3 = tam;

    }
    document.getElementById('ketQuaBai1').innerHTML = so1 + " < " + so2 + " < " + so3;
}

document.getElementById('btn3').onclick = function () {
    // input: 3 số :Number
    var so1 = Number(document.getElementById('b3so1').value);
    var so2 = Number(document.getElementById('b3so2').value);
    var so3 = Number(document.getElementById('b3so3').value);
    // output: soChan: Number, soLe: Number
    var soChan = 0;
    var soLe = 0;
    // xử lý:
    if ((so1 % 2) == 0) {
        soChan++;
    } else {
        soLe++;
    }
    if ((so2 % 2) == 0) {
        soChan++;
    } else {
        soLe++;
    }
    if ((so3 % 2) == 0) {
        soChan++;
    } else {
        soLe++;
    }
    document.getElementById('ketQua_b3').innerHTML = "Có: " + soChan + " Số chẵn, " + soLe + " Số lẽ.";
}

// Bài 4
document.getElementById('btn4').onclick = function () {
    // input: 3 canh của tam giác: Number
    var canhA = Number(document.getElementById('canhA').value);
    var canhB = Number(document.getElementById('canhB').value);
    var canhC = Number(document.getElementById('canhC').value);
    // output: ketQua: String
    var ketQua = "";
    // Xử lý:
    if (canhA * canhA == canhB * canhB + canhC * canhC || canhB * canhB == canhA * canhA + canhC * canhC || canhC * canhC == canhA * canhA + canhB * canhB) {
        ketQua = " Tam Giác Vuông";
    } else if (canhA == canhB && canhB == canhC) {
        ketQua = 'Tam Giác Đều';
    } else if (canhA == canhB || canhB == canhC || canhC == canhA) {
        ketQua = 'Tam Giác Cân';
    }
    document.getElementById('ketQuaB4').innerHTML = ketQua;
}