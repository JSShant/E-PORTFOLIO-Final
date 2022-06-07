let contrastToggle = false
function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    } else {
        document.body.classList.remove("dark-theme")
    }
}



let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}

function contact(event) {
    event.preventDefault();

    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }, 1000);
}