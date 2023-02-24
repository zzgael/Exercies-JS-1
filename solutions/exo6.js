function afficherResteDivision(event) {
    event.preventDefault()

    let premierNombre = document.getElementById("firstNumber").value.replace(",", ".")
    let deuxiemeNombre = document.getElementById("secondNumber").value.replace(",", ".")

    alert(premierNombre % deuxiemeNombre)
}

document.querySelector("form").addEventListener("submit", afficherResteDivision)