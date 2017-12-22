//variables
var btn = document.getElementById("button");
var liste = document.getElementById("liste");
var nb = 0;
var done = document.getElementById("case1");
var notDone = document.getElementById("case2");
var stor = localStorage;
var filtre = document.getElementsByClassName("task");


//listeners

btn.addEventListener("click", add)
done.addEventListener("click",case1)
notDone.addEventListener("click",case2)

//affichage de tache déjà présente dans le local storage

for(var i = 0;i<localStorage.length;i++)
{
    var tache = localStorage.key(i);
    var donnees = localStorage.getItem(tache);
    var tabl = JSON.parse(donnees);
    var date = tabl.d;
    console.log(date);
    

   
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
    ancre.className = "collection-item";
    
    NewBox.type = "checkbox";
    NewBox.className = "filled-in";
    NewBox.className += " task";
    NewBox.id = "task"+i;
    label.setAttribute("for","task"+i);
    label.innerHTML = tache;
    createDate.innerHTML = date;
    ancre.appendChild(NewBox);
    ancre.appendChild(label);
    ancre.appendChild(createDate);
    liste.appendChild(ancre);

}

function LocalCheck ()
{
}

function add ()
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
            
            var date = moment().format('lll');
            nb++
            console.log(date)
            var obj = {};
            obj.d = date
            console.log(obj);
            var object = JSON.stringify(obj);
            
            localStorage.setItem(tache,object);

            input.value="";
            
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
            ancre.className = "collection-item";
            
            NewBox.type = "checkbox";
            NewBox.className = "filled-in";
            NewBox.className += " task";
            NewBox.id = "task"+nb;
            label.setAttribute("for","task"+nb);
            label.innerHTML = tache;
            createDate.innerHTML = date
            ancre.appendChild(NewBox);
            ancre.appendChild(label);
            ancre.appendChild(createDate);
            liste.appendChild(ancre);
        }
    }
    verif=0;


            
    

}


function case1 ()
{
    if(done.checked)
    {
        for(var i =0;i<nb;i++)
        {
            if(filtre[i].checked)
            {
                var pa = filtre[i].parentElement;
                pa.style.display="none";    
                
            }
        }


    }
    else
    {
        for(var i =0;i<nb;i++)
        {
            if(filtre[i].checked)
            {
                filtre[i].parentElement.style.display="";    
                
            }
        }



    }
}

function case2 ()
{
    var filtre = document.getElementsByClassName("task");
    if(notDone.checked)
    {
        for(var j =0;j<nb;j++)
        {
            if(!filtre[j].checked)
            {
                filtre[j].parentElement.style.display="none";  

            }
        }


    }
    else
    {
        for(var j =0;j<nb;j++)
        {
            if(!filtre[j].checked)
            {     
                filtre[j].parentElement.style.display="";
            }
        }



    }
}


