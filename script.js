//récupérer les informations du formulaire
const recup = (e) => {
    let nameOr = document.getElementById('form__name').value;
    let descriptionOr = document.getElementById('form__description').value;
    let dueOr = document.getElementById('form__due').value;
    let labelOr = document.getElementById('form__label').value;
    create_task(nameOr, descriptionOr, dueOr, labelOr);
}

let submit = document.getElementById("submit");
submit.addEventListener('click', recup);



//Créer les cartes dans le HTML

    function create_task(name,description,date,label){
        //creation carte-tache
        let tasks=document.querySelector(".tasks")
        let task=document.createElement("div");
        task.className="tasks__task"
        tasks.appendChild(task)
        //creation nom
        let name_task=document.createElement("h2")
        name_task.className="tasks__task--name"
        task.textContent=name
        task.append(name_task)
        //creation description
        let description_task=document.createElement("p")
        description_task.className="tasks__task--description"
        description_task.textContent=description
        task.append(description_task)
        //creation date-end
        let date_task=document.createElement("p")
        date_task.className="tasks__task--date"
        date_task.textContent=date
        task.append(date_task)
        //creation label
        let label_task=document.createElement("p")
        label_task.className="Tasks__task--label"
        label_task.textContent=label
        task.append(label_task)
        //temps restant
        let Time_task=document.createElement("p")
        Time_task.className="Tasks__task--time"
        Time_task.textContent=day(date)
        task.append(Time_task)
    }


//Filtrer




//Trier


//retourne le nombre de jours entre maintenant et la date en argument.
function day(date_end){
    let date=new Date(date_end)
    let Now= new Date()
    let Time=date.getTime()-Now.getTime()
    let formatTime=Math.ceil((Time/(1000*60*60*24)))
    return formatTime
}




