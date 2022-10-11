const showForm = document.querySelectorAll('.fa-plus')

Array.from(showForm).forEach( element => {
    element.addEventListener('click', secondaryForm)
})

async function secondaryForm(event) {
    const secondaryForm = document.getElementById(event.target.nextElementSibling.id)
    const classExist = document.getElementsByClassName('snake--mobile');

    try {
        console.log(event.target.nextElementSibling.id)
        
        if (secondaryForm.classList.contains("hidden")) {
            secondaryForm.classList.remove("hidden")
        } else {
            secondaryForm.classList.add("hidden")
        }

    }catch(err){
            console.log(err)
        }
}