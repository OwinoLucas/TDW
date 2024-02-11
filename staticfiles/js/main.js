// loader
let mwili = document.querySelector("body");
let mwili_cnt = document.querySelector(".body-container");
var loader = document.getElementById("circle-container");
window.addEventListener("load", function () {
    loader.style.opacity = "0";
    loader.style.display = "none";
    mwili.style.overflowY = "scroll";
})

//scroll to top
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcH);
    if(pos>100){
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })
    scrollProgress.style.background = `conic-gradient(#05b365 ${scrollValue}%, #1A181B ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


//auto update the year
var the_year = document.getElementById("TheYear");
the_year.innerHTML = new Date().getFullYear();


//faqs
faqs = document.querySelectorAll(".faq");
    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        });
    });


//tabs
let filter_btns = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');

for (let i = 0; i < filter_btns.length; i++) {
    filter_btns[i].addEventListener('click', function() {
        for (let j = 0; j < filter_btns.length; j++) {
            filter_btns[j].classList.remove('active');
        }
        filter_btns[i].classList.add('active');
        let select_tab = filter_btns[i].getAttribute('data-tab');
        for (let t = 0; t < tab_items.length; t++) {
            document.querySelector('.tab-filter-item-container').style.height = 
                tab_items[t].scrollHeight + "px";
                if (tab_items[t].classList.contains(select_tab)) {
                    tab_items[t].classList.add('select_tab');
                } else {
                    tab_items[t].classList.remove('select_tab');
                };
        };
    });
};

for (let th = 0; th < tab_items.length; th++) {
    document.querySelector('.tab-filter-item-container').style.height = 
        tab_items[th].scrollHeight + "px";
}
