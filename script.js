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





//Filtrer






//Trier