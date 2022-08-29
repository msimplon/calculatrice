const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');
// const equal = document.getElementById('equal');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        result.textContent += e.target.id;
    });
});


equal.addEventListener('click', () => {
    result.textContent = eval(result.textContent);
});



// 1 : querySelectorALL : il va chercher tous les bouttons (la console affiche une liste de bouttons)
// 2 : identifier le h3 pour qu'il affuche ce qu'on veut en textContent
// 3 : tous les bouttons auront un évènement au clique du boutton grace au e.target.id
// 4 : il faut injecter le e.target.id à result cad dans le H3 grace a result.textContent
// 5 :  equal.addEventListener va déclencher le equal lors du click
// 5 : eval(result.textContent) va calculer ce qu'il y'a dedans
// 6 : il va l'injecter à result.textContent

//rappel 
// eval : méthode qui permet de calculer automatiquement tout ce qui est à l'interieur
// pas besoin de déclarer les bouttons  car javascript connait déjà les bouttons, il en est de mm pr les checkbx et clear

clear.addEventListener("click", () => {
    result.textContent = "";
});