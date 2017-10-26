function tableFill() {
    var table = document.getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(0);
    newRow.insertCell(-1).innerHTML = document.getElementsByTagName("input")[0].value;
    newRow.insertCell(-1).innerHTML = document.getElementsByTagName("input")[1].value;
    newRow.insertCell(-1).innerHTML = document.getElementsByTagName("input")[2].value;
    newRow.insertCell(-1).innerHTML = document.getElementsByTagName("input")[3].value;
}