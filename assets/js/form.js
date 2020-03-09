function ShowConnectIPS(){
    var x = document.getElementById("connectips");
    
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function ShowEspecificMigra(){
    var x = document.getElementById("especificmigration");
    
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function especificmigration(){
    var domains = [''];
    boxvalue = document.getElementById('newdomain').value;
    domains.push(boxvalue);
    console.log(domains);
}

//TableTitles
titlestable = ['Select','Main Domain','Source Server', 'Source IP','Destination Server', 'Destination IP', 'Brand'];
var tablex = document.getElementById('tablecontainer');
var tablex = document.createElement



//Add one item on dashboard
function AddOneItem(){
    alert("Teste");
}
//Remove item of dashboard
function DelOneItem(){
    alert("Teste");
    
}