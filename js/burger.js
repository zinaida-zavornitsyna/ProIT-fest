document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})

// document.querySelectorAll('.menu__link').addEventListener('click', function (){
//     document.querySelector('.burger').classList.toggle('active');
//     document.querySelector('.nav').classList.remove('open');
// })

var menu_items = document.querySelectorAll('.menu__link');
Array.from(menu_items).forEach(item => {
    item.addEventListener('click', function(event) {
        document.querySelector('.burger').classList.toggle('active');
        document.querySelector('.nav').classList.remove('open');
    });
});