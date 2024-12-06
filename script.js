function generateTable(){
    let getNumber = Number (document.getElementById("Numoftable").value);
    let countNumber = Number (document.getElementById("countNumber").value);
    let mathTable = "";
    for(let i = 1; i <= countNumber; i++){ 
        mathTable += `<tr><td>${getNumber}</td><td>x</td><td>${i}</td><td>=</td><td>${getNumber * i}</td></tr>`;
    }
    document.getElementById("writeTable").innerHTML = mathTable;
};