window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");

    var myModal = new bootstrap.Modal(document.getElementById('myModal'));


    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");

        const prenom = document.querySelector("#inputPrenom3").value;

        if (validatePrenom(prenom) == false) {
            console.log('erreur dans le prenom')
            myModal.show();

        }

        const nom = document.querySelector("#inputNom3").value;

        if (validateNom(nom) == false) {
            console.log('erreur dans le nom')
            myModal.show();

        }
        const date = document.querySelector("#inputDateDeNaissance3").value;

        if (validateDate(date) == false) {
            console.log('erreur dans la date')
            myModal.show();

        }

        


    });


};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePrenom(prenom) {
    if (prenom.length > 5) {
        return true;
    }

    return false;
}

function validateNom(nom) {
    if (nom.length > 5) {
        return true;
    }

    return false;
}

function calcNbChar(id) {
    document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length;
  }

function validateDate() {
    const inputDateDeNaissance3 = document.getElementById('inputDateDeNaissance3').value;

        let dateNaissance = new Date(inputDateDeNaissance3); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#syntaxe
        let dateNaissanceTimestamp = dateNaissance.getTime();

        let nowTimestamp = Date.now();

        return (dateNaissanceTimestamp < nowTimestamp)
}

