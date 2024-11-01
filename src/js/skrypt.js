const comment = document.getElementById("comment");
const save = document.querySelector(".save--js");
const load = document.querySelector(".load--js");


save.addEventListener('click', () => {
    localStorage.setItem('wynik', comment.value);
    console.log(comment.value);
})

load.addEventListener('click', () => {
    const a = localStorage.getItem('wynik')
    comment.value = a;
})