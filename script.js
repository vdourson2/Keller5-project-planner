//récupérer les informations du formulaire
const recup = (e) => {
    let nameOr = document.getElementById('form__name').value;
    let descriptionOr = document.getElementById('form__description').value;
    let dueOr = document.getElementById('form__due').value;
    let labelOr = document.getElementById('form__label').value;
    document.getElementById("formulaire").reset();
    create_task(nameOr, descriptionOr, dueOr, labelOr);
    let tache = {
        name : nameOr,
        description : descriptionOr,
        due : dueOr,
        label : labelOr,
    }
    liste.push(tache);
    console.log(liste);
    localStorage.setItem("Liste",JSON.stringify(liste));
    //localStorage.clear();

}

let submit = document.getElementById("submit");
let liste = [];
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
    }


//Filtrer






//Trier