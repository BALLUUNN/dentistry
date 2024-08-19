let siteBarList = [document.querySelector('.polos'), document.querySelector('.polos1'), document.querySelector('.closeSitebar1'), document.querySelector('.sitebar.defoult'), document.querySelector('.header'),document.querySelector('.polos2')];

const header = document.querySelector('.header');
const sitebar = document.querySelector('.sitebar.defoult');



document.querySelector('.burger_menu').addEventListener('click', () => {
    
    if (document.querySelector('.sitebar.active') === null) {
        siteBarList.forEach(el => {
            el.classList.add('active')
        })

        sitebar.classList.remove('defoult')
        if (document.querySelector('.header.defoult') !== null) {
            header.classList.remove('defoult')
        }

    } else {
        siteBarList.forEach(el => {
            el.classList.remove('active')
        })

        sitebar.classList.add('defoult')
        header.classList.add('defoult')

    }
});








document.querySelector('.search').oninput = function() {

    let ul = document.querySelector('.variant');
    let value = this.value.trim().toLowerCase();
    let list = document.querySelector('.variant').querySelectorAll('.def');
    let defWrong = document.querySelector('.defWrong');


    setTimeout(() => {

    if (value !== '') {

        ul.classList.add('active');

        list.forEach(el => {

        let listPart = el.innerText.toLowerCase();


        if (listPart.search(value) === -1) {
            el.classList.remove('active')
        } else {
            el.classList.add('active')
        };


        });
    } 

    else {
        ul.classList.remove('active')
    }
    
    
    if (document.querySelector('.def.active') === null) {
        defWrong.classList.add('active')
    } else {
        defWrong.classList.remove('active')  
    }
    }, 300)
    
}

