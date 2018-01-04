//variables
var btn = document.getElementById("button");
var liste = document.getElementById("liste");
var title = document.getElementById("input_title")
var nb = 0;
var selection = document.getElementById("select");
var stor = localStorage;
var filtre = document.getElementsByClassName("task");


//listeners

selection.addEventListener("change",selector)
btn.addEventListener("click", add)

//affichage de tache déjà présente dans le local storage

for(var i = 0;i<localStorage.length;i++)
{
    var tache = localStorage.key(i);
    var donnees = localStorage.getItem(tache);
    var tabl = JSON.parse(donnees);
    var date = tabl.d;
    var modifDate = tabl.m;
    var valid = tabl.a;
    console.log(date);

      //BOUTTON SUPPRIMER//
      var bouton = document.createElement("a");
      bouton.className = ("btn2"+" btn"+" btn-small"+" waves-effect"+" waves-light"+" red");
      var icone = document.createElement("i");
      icone.className = ("material-icons");
      icone.innerHTML = "clear";
      bouton.appendChild(icone);
  
    

   
    //creation de l'ancre pour la nouvelle tache
    var ancre = document.createElement("a");
    //creation de la checkbox pour la nouvelle tache 
    var NewBox = document.createElement("input");
    // ajout du label contenant la tache
    var label = document.createElement("label");
    //ajout du span contenant la date de création
    var createDate = document.createElement("span") 
    createDate.className = ("date");
    //ajout de la classe materialize a l'ancre
    ancre.className = "collection-item wrap";
    
    NewBox.type = "checkbox";
    NewBox.className = "filled-in";
    NewBox.className += " task";
    NewBox.id = "task"+i;
    label.setAttribute("for","task"+i);
    label.innerHTML = tache;

    if(!modifDate)
    {
        createDate.innerHTML = "creation: "+date;
    }
    else
    {
        createDate.innerHTML = "Last modification: "+date;      
    }
    ancre.appendChild(NewBox);
    ancre.appendChild(label);
    ancre.appendChild(createDate);
    ancre.appendChild(bouton);
    liste.appendChild(ancre);
    NewBox.addEventListener("change",validate);
    bouton.addEventListener("click",suppr);
    if(valid == true)
    {
        NewBox.checked = true;
    }

    nb=i;

}


function add (evt)
{
    var verif = 0;
    var input = document.getElementById("input");
    var tache = input.value;
    for(var i = 0;i<localStorage.length;i++)
    {
        var localtask = localStorage.key(i);
        if (localtask == tache)
        {
            verif = 1
            break;
        }
    }
    if(verif == 1)
    {
        alert("Task exist already" );
    }
    else
    {

        if( !tache)
        {
            alert("Empty task not allowed");
        }
        else
        {  
            nb++
            
            var date = moment().format('lll');

            //BOUTTON SUPPRIMER//
            var bouton = document.createElement("a");
            bouton.className = ("btn2"+" btn"+" btn-small"+" waves-effect"+" waves-light"+" red");
            var icone = document.createElement("i");
            icone.className = ("material-icons");
            icone.innerHTML = "clear";
            bouton.appendChild(icone);
        
            
            //creation de l'ancre pour la nouvelle tache
            var ancre = document.createElement("a");
            //creation de la checkbox pour la nouvelle tache 
            var NewBox = document.createElement("input");
            // ajout du label contenant la tache
            var label = document.createElement("label");
            //ajout du span contenant la date de création
            var createDate = document.createElement("span") 
            createDate.className = ("date");
            //ajout de la classe materialize a l'ancre
            ancre.className = "collection-item"+" wrap";

            
            NewBox.type = "checkbox";
            NewBox.className = "filled-in";
            NewBox.className += " task";
            NewBox.id = "task"+nb;
            label.setAttribute("for","task"+nb);
            label.innerHTML = tache;
            createDate.innerHTML = "creation: "+date;
            ancre.appendChild(NewBox);
            ancre.appendChild(label);
            ancre.appendChild(createDate);
            ancre.appendChild(bouton);
            liste.appendChild(ancre);
            
            //add listener//
            
            NewBox.addEventListener("change",validate);

            bouton.addEventListener("click",suppr);
            
            
            var test = NewBox.checked;
            console.log(date)
            var obj = {};
            obj.d = date
            obj.a = test
            console.log(obj);
            var object = JSON.stringify(obj);
            
            localStorage.setItem(tache,object);
            
            input.value="";
        }
    }
    verif=0;
    evt.preventDefault();
}

 /////////////////////////FILTRE/////////////////////////////

function selector()
{
    console.log("je suis dedans ");
    var filtre = document.getElementsByClassName("task");
    var option = selection.value;
    console.log(option);
    switch (option)
    {
        case "1":
        {
            for(var i = 0;i<localStorage.length;i++)
            {
                    filtre[i].parentElement.style.display="";    

            }
            break;

        }
        case "2":
        {
            for(var i = 0;i<localStorage.length;i++)
            {
                console.log(filtre[i].checked);

                if(filtre[i].checked == true)
                {
                    filtre[i].parentElement.style.display="none";    
                    
                }
                else
                {
                    filtre[i].parentElement.style.display=""; 
                }
            }
            break;
            

        }
        case "3":
        {
            for(var j = 0;j<localStorage.length;j++)
            {   
                if(!filtre[j].checked)
                {
                    filtre[j].parentElement.style.display="none";  

                }
                else
                {
                    filtre[j].parentElement.style.display=""; 
                }
            }
            break;
            
        }
    }
        

}

// validate //

function validate()
{
    var modif = moment().format('lll');
    var val = this.checked;
    var tid = this.id;
    var length = tid.length;
    var chiffre = tid.substring(length -1, length);
    console.log(chiffre);

    var tache = localStorage.key(chiffre);
    var donnees = localStorage.getItem(tache);
    var tabl = JSON.parse(donnees);
    var valid = tabl.a;

    //modif date //


    valid = val;
    tabl.m = modif;
    tabl.a = valid ;

    
    
    var object = JSON.stringify(tabl);
    localStorage.setItem(tache,object);  
    

    
}

//////////////////////SUPPRIMER TACHE///////////////////////////

function suppr ()
{
    confirm("Do you really want to delete this task ?");

    if(true)
    {
        var DelTask = this.parentElement;
        var child = DelTask.firstChild;
        var tid = child.id;
        var length = tid.length;
        var chiffre = tid.substring(length -1, length);
        console.log(chiffre);
        var tasktodel = localStorage.key(chiffre);
        localStorage.removeItem(tasktodel);

        liste.removeChild(DelTask);

    }
}

// list materialize activation //

$(document).ready(function(){
    $('select').material_select();
    $(".button-collapse").sideNav();

});




