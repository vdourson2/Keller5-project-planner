//Encodage manuel de quelques cartes pour l'exercice
const base = [
    {
        name : "Initialisation",
        description : "Démarrer le processus et créer les documents de base",
        due : "2022-12-28",
        label : "done"
    },
    {
        name : "Répartition des tâches",
        description : "Déterminer les différentes tâches à réaliser et dispatcher suivant les souhaits et les compétences",
        due : "2023-01-15",
        label : "doing" 
    },
    {
        name : "Contact avec le client",
        description : "Fixer un rendez-vous avec Monsieur Tartenpiont et voir avec lui les exigences au niveau du design",
        due : "2023-01-15",
        label : "doing"
    },
    {
        name : "Présentation de l'avant-projet",
        description : "Fixer une date et réunir toute l'équipe pour la présentation de l'avant-projet",
        due : "2023-02-10",
        label : "to-do"
    },
]
for (let b of base){
    create_task(b.name, b.description, b.due, b.label)
}

//récupérer les informations du formulaire
const recup = (e) => {
    //Récupération des données du formulaire
    let nameOr = document.getElementById('form__name').value;
    let descriptionOr = document.getElementById('form__description').value;
    let dueOr = document.getElementById('form__due').value;
    console.log(dueOr);
    let labelOr = document.getElementById('form__label').value;
    console.log(labelOr);
    //Reset des zones d'encodage
    document.getElementById("formulaire").reset();
    //Appel de la fonction de création des cartes dans la div "task."
    create_task(nameOr, descriptionOr, dueOr, labelOr);
    
    /*Local storage
    let tache = {
        name : nameOr,
        description : descriptionOr,
        due : dueOr,
        label : labelOr,
    }
    liste.push(tache);
    console.log(liste);
    localStorage.setItem("Liste",JSON.stringify(liste));
    localStorage.clear();*/

}

let submit = document.getElementById("submit");
/*local storage;
let liste = [];*/
submit.addEventListener('click', recup);



//Créer les cartes dans le HTML

    function create_task(name,description,date,label){
        //creation carte-tache
        let tasks=document.querySelector(".tasks");
        let task=document.createElement("div");
        task.className="tasks__task";
        tasks.appendChild(task);
        //Création div de gauche
        let divGauche = document.createElement("div");
        task.appendChild(divGauche);
        //creation nom
        let name_task=document.createElement("h2");
        name_task.className="tasks__task--name";
        name_task.textContent = name;
        divGauche.appendChild(name_task);
        //creation description
        let description_task=document.createElement("p");
        description_task.className="tasks__task--description displayNone";
        description_task.textContent = description;
        divGauche.appendChild(description_task);
        //creation date-end
        let date_task=document.createElement("p");
        date_task.className="tasks__task--date displayNone";
        date_task.textContent=date;
        divGauche.appendChild(date_task);
        //temps restant
        let Time_task=document.createElement("p");
        Time_task.className="tasks__task--time";
        Time_task.textContent=day(date);
        divGauche.appendChild(Time_task);
        //ajout du texte à côté du temps restant
        let texteTpsRestant = document.createElement("span");
        texteTpsRestant.textContent=" jours restants";
        Time_task.appendChild(texteTpsRestant);
        //creation label
        let label_task=document.createElement("p")
        label_task.className="tasks__task--label"
        if (label == "done"){
            label_task.style.backgroundImage = "url(./images/icons-validated.webp)";
        }
        else if (label == "doing"){
            label_task.style.backgroundImage = "url(./images/icons-in-progress.webp)";
        }
        else {
            label_task.style.backgroundImage = "url(./images/icons-not-validated.webp)";
        }
        //label_task.textContent=label
        task.appendChild(label_task)
        task.classList.add(`${label}`);
        //Création de l'évènement "agrandir quand on clique"
        name_task.addEventListener('click', (e) =>{
            if (description_task.classList.contains("displayNone")){
                description_task.classList.replace("displayNone","displayBlock");
                date_task.classList.replace("displayNone","displayBlock");
                description_task.style.display = "block";
                date_task.style.display = "block";
            }
            else {
                description_task.classList.replace("displayBlock","displayNone");
                date_task.classList.replace("displayBlock","displayNone");                
                description_task.style.display = "none";
                date_task.style.display = "none";
            }
        })
        name_task.addEventListener("mouseenter", function( ev ) {
            ev.target.style.cursor = "pointer";
            ev.target.style.fontWeight = "500";
        })
        name_task.addEventListener("mouseleave", function( ev ) {
            ev.target.style.cursor = "default";
            ev.target.style.fontWeight = "400";
        })
            
    }

//Filtrer
//sélectionner les filtres
let filter = document.getElementById("categories__filter--select");
//Appeler l'événement
filter.addEventListener("change", changeFilter);
//Fonction de l'événement
function changeFilter(el){
    let labelToDo = document.querySelectorAll(".to-do");
    let labelDoing = document.querySelectorAll(".doing");
    let labelDone = document.querySelectorAll(".done");
    console.log(labelToDo);
    console.log(labelDoing);
    console.log(labelDone);
    if (el.target.value == "All"){
        labelToDo[0].style.display = "block";
        labelDoing[1].style.display = "block";
        labelDone[0].style.display = "block";
    }
    else if (el.target.value == "to-do"){
        labelToDo[0].style.display = "block";
        labelDoing[0].style.display = "none";
        labelDone[0].style.display = "none";
    }
    else if (el.target.value == "doing"){
        labelDoing[0].style.display = "block";
        labelToDo[0].style.display = "none";
        labelDone[0].style.display = "none";
    }
    else if (el.target.value == "done"){
        labelDone[0].style.display = "block";
        labelDoing[0].style.display = "none";
        labelToDo[0].style.display = "none";
    }
}



//Trier


//retourne le nombre de jours entre maintenant et la date en argument.
function day(date_end){
    let date=new Date(date_end)
    let Now= new Date()
    let Time=date.getTime()-Now.getTime()
    let formatTime=Math.ceil((Time/(1000*60*60*24)))
    return formatTime
}




