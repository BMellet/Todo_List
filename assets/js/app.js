var btn = document.getElementById("button");
var liste = document.getElementById("liste");
var nb = 0;
var done = document.getElementById("case1");
var notDone = document.getElementById("case2");

btn.addEventListener("click", add)

done.addEventListener("click",case1)
notDone.addEventListener("click",case2)

function add ()
{
    var tache = document.getElementById("input").value;
    var NewTask = "<a  class=\"collection-item\"><input type=\"checkbox\" class=\"filled-in task\" id=\"task"+nb+"\" /><label for=\"task"+nb+"\">"+tache+"</label><span class=\" date\">"+Date();+"</a>";

    liste.innerHTML = NewTask + liste.innerHTML;
    nb++;
}


function case1 ()
{
    var filtre = document.getElementsByClassName("task");
    if(done.checked)
    {
        for(var i =0;i<nb;i++)
        {
            if(filtre[i].checked)
            {
                filtre[i].parentElement.style.display="none";    
                
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


