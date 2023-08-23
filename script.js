// C R U D - Create ,Read ,Update, Delete
var row = null ;                 

function Submit()
{
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStorage(dataEntered);   //at this line the local storage means the memory where the entered data is saved first
    if(dataEntered == false)
    {
        msg.innerHTML = `<h4 style ="color: red;">Please fill the form completely!</h3>`;
    }
    else
    {
        if(row == null)
        {
            insert(readData);
            msg.innerHTML = `<h4 style ="color: rgba(29, 163, 49, 0.959);">Data is Inserted</h3>`;
        }
        else
        {
            update();
            msg.innerHTML =`<h4 style ="color: green;">Data is Updated</h3>`;
        }
    }  
    document.getElementById("form").reset(); //Field is cleared after submiting the data
}

//CREATE >>
//Retriving data from Form entered by user
function retrieveData()
{
    let fullName = document.getElementById("name").value;
    let job = document.getElementById("job").value;
    let exp = document.getElementById("exp").value;

    var arr = [fullName,job,exp];
    if(arr.includes(""))
    {
        return false;
    }
    else
    {
        return arr;
    }
    
}

//READ
//Data in Local Storage
function readingDataFromLocalStorage(dataEntered)
{
    //storing data in Local storage
    var n = localStorage.setItem("Name",dataEntered[0]);
    var j = localStorage.setItem("Job",dataEntered[1]);
    var e = localStorage.setItem("Experience",dataEntered[2]);

    //getting values from local storage to Tabe
    var n1 = localStorage.getItem("Name",n);
    var j1 = localStorage.getItem("Job",j);
    var e1 = localStorage.getItem("Experience",e);

    var arr = [n1,j1,e1];
    return arr;
}

//INSERT
function insert(readData)
{
    var table = document.getElementById("t");

    var row = table.insertRow();

    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = `<button onclick = edit(this) style = "background-color: rgba(255, 196, 0, 0.68)";>Edit</button> 
                                   <button onclick = remove(this) style = "background-color:rgba(0, 102, 255, 0.352)";>Delete</button> `; // " `" this sign is used to down the any html code without error because if we use ""  to end it will show error in double line
    
   
}

// EDIT
function edit(td)
{
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("job").value = row.cells[1].innerHTML;
    document.getElementById("exp").value = row.cells[2].innerHTML;

}
//UPDATE
function update()
{
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("job").value;
    row.cells[2].innerHTML = document.getElementById("exp").value;
    row = null;
}

//DELETE
function remove(td)
{
    var ans = confirm("Are you sure want to delete this record?");
    if(ans == true)
    {
        var row = td.parentElement.parentElement;
        row.remove();
        msg.innerHTML =`<h4 style ="color: orange;">Data is Deleted</h3>`;
    }
}

