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
    //Ajout d'une tache dans le compteur
    count()
    let tasks=document.getElementsByClassName("tasks")[0]
    if(tasks.classList.contains("alphabet")){
        tri_alphabet()
    }
    else if(tasks.classList.contains("time")){
        tri_time()
    }
    
    
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

//affichage form
addition=document.getElementsByClassName("header__addition")[0]
form=document.getElementsByClassName("form")[0]
addition.addEventListener("click",()=>{
    if(form.style.display=="none"){
        form.style.display="block";
    }
    else{
        form.style.display="none"
    }
})




//Créer les cartes dans le HTML

    function create_task(name,description,date,label){
        //creation carte-tache
        let tasks=document.querySelector(".tasks");
        let task=document.createElement("div");
        task.className="tasks__task";
        tasks.appendChild(task);
        //Création div de gauche
        let divGauche = document.createElement("div");
        divGauche.className = "tasks__task--divGauche";
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


//gestion nombre de tache
function count(){
    list_task=document.getElementsByClassName("tasks__task")
    length=list_task.length
    subtitle=document.getElementsByClassName("header__para")[0];
    subtitle.textContent="You have "+ length +" tasks today ";
}
count()

//Filtrer

let filter = document.getElementById("categories__filter--select");
filter.addEventListener("change", changeFilter);
function changeFilter(e){
    list_task=document.getElementsByClassName("tasks__task")
    for(elem of list_task){
        elem.style.display="none"
    }
    for (elem of list_task){
        if(elem.classList.contains("to-do") && e.target.value=="to-do" ){
            elem.style.display="flex"
        }
        else if(elem.classList.contains("doing") && e.target.value=="doing"){
            elem.style.display="flex"
        }
        else if(elem.classList.contains("done") && e.target.value=="done"){
            elem.style.display="flex"
        }
        else if(e.target.value=="All"){
            elem.style.display="flex"
        }
    }
}



//Trier alphabet+temps
function select_sort(){
    let tasks=document.getElementsByClassName("tasks")[0]
    let alpha=document.getElementsByClassName("categories__sort--alphabet")[0]
    let temps=document.getElementsByClassName("categories__sort--time")[0]
    if(tasks.classList.contains("alphabet")){
        alpha.style.filter="brightness(0) invert(1)";
        temps.style.filter="none";
    }
    else if(tasks.classList.contains("time")){
        temps.style.filter="brightness(0) invert(1)";
        alpha.style.filter="none";
    }
}
select_sort()
tri_time()
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
let sort_alphabet = document.getElementsByClassName("categories__sort--alphabet")[0];
sort_alphabet.addEventListener("click",tri_alphabet);
function tri_alphabet(){
        tasks=document.getElementsByClassName("tasks")[0]
        if(tasks.classList.contains("time")){
            tasks.classList.remove("time")
        }
        tasks.classList.add("alphabet");
        select_sort()
        list_task=document.getElementsByClassName("tasks__task")
        alphabet=[]
        for (let elem of list_task){
            name_task=elem.firstElementChild.children[0].textContent
            alphabet.push(name_task.toLowerCase())
        }
        list_title_sort=alphabet.sort()
        list_task_sort=[]
        for(let title of list_title_sort){
            for(let elem of list_task){
                if(elem.firstElementChild.children[0].textContent.toLowerCase()==title)
                    list_task_sort.push(elem)
            }
        }
        removeAllChildNodes(tasks)
        for(let elem of list_task_sort ){
            tasks.appendChild(elem)
        }
}
let sort_time = document.getElementsByClassName("categories__sort--time")[0];
sort_time.addEventListener("click",tri_time);
function tri_time(){
    tasks=document.getElementsByClassName("tasks")[0]
    if(tasks.classList.contains("alphabet")){
        tasks.classList.remove("alphabet")
    }
    tasks.classList.add("time");
    select_sort()
    list_task=document.getElementsByClassName("tasks__task")
    time=[]
    for (let elem of list_task){
         time_task=elem.firstElementChild.children[2].textContent
        date=new Date(time_task)
        time.push(date)
    }
    list_time_sort=time.sort((a, b) => a-b);
    list_task_sort=[]
    for(let timing of list_time_sort){
        for(let elem of list_task){
            elem_time=new Date(elem.firstElementChild.children[2].textContent)
            if(elem_time.getTime()==timing.getTime())
                list_task_sort.push(elem)
        }
    }
    removeAllChildNodes(tasks)
    for(let elem of list_task_sort ){
        tasks.appendChild(elem)
    }     
}






//retourne le nombre de jours entre maintenant et la date en argument.
function day(date_end){
    let date=new Date(date_end)
    let Now= new Date()
    let Time=date.getTime()-Now.getTime()
    let formatTime=Math.ceil((Time/(1000*60*60*24)))
    return formatTime
}




