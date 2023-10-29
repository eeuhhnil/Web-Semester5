const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.category-item')

tabs.forEach((tab) =>{
    tab.onclick = function (){
        $('.category-item--active').classList.remove('category-item--active')
        this.classList.add('category-item--active')
    }
})

const before_load_time = new Date().getTime();
window.onload = pageLoadTime;

function pageLoadTime() {
    const load_time = new Date().getTime();
    const page_load_time = (load_time - before_load_time) / 1000

    document.getElementById("load-time").innerHTML = "Page load time is " + page_load_time + " Seconds";
}