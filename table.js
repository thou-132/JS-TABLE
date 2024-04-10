function OnFormSubmit(){
    var formData = readFormData()
    insert(formData);
}
function readFormData(){
    var formData = {};
   formData["FullName"] = document.getElementById("fullname").value;
    formData["roll No"] = document.getElementById("roll no").value;
    formData["email"] = document.getElementById("email").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
};

function insert(data){
    var table = document.getElementById("emlis").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.rollno;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML=`<a>Edit</a>
                     <a>Delete</a>`;


};                 