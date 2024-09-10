const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('.nav_items');

//open nav items
menuBtn.addEventListener('click', () =>{
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block'
})

//open nav items
closeBtn.addEventListener('click', () =>{
    menu.style.display = 'none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
})

//hide faqs
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //close icon and open icon
        let icon = faq.querySelector('.faq_icon i');
        if(icon.className == "fa-solid fa-plus"){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "fa-solid fa-plus"
        }
    })
})

// add background and border style to nav bar
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})