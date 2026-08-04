const reveals = document.querySelectorAll(
'.reveal-left, .reveal-right'
);

function revealElements(){

    reveals.forEach((element)=>{

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.classList.add('active');

        }

    });

}

window.addEventListener('scroll', revealElements);

revealElements();

/* CONTADORES */

const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{

    const updateCounter = ()=>{

        const target = +counter.dataset.target;
        const current = +counter.innerText;

        const increment = target / 80;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            if(target === 94){

                counter.innerText = target + "%";

            }else{

                counter.innerText = target + "+";

            }

        }

    };

    updateCounter();

});


// =====================================
// CONTACT CARDS ANIMATION
// =====================================

const contactCards =
  document.querySelectorAll('.contact-card');

contactCards.forEach(card => {

  card.addEventListener('mouseenter', () => {

    card.style.transform =
      'translateY(-8px) scale(1.02)';

  });

  card.addEventListener('mouseleave', () => {

    card.style.transform =
      'translateY(0) scale(1)';

  });

});



const bg = document.querySelector('.bg-animation');

for(let i = 0; i < 25; i++){

    const node = document.createElement('span');

    node.style.left = Math.random() * 100 + '%';

    node.style.top = Math.random() * 100 + '%';

    node.style.animationDuration =
        (12 + Math.random() * 18) + 's';

    node.style.animationDelay =
        Math.random() * 5 + 's';

    node.style.opacity =
        Math.random();

    const size =
10 + Math.random() * 20;

    node.style.width = size + 'px';
    node.style.height = size + 'px';

    bg.appendChild(node);
}



// =====================================
// MENÚ MÓVIL
// =====================================

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('nav-active');
    menuToggle.classList.toggle('active');

});

// Cierra el menú al hacer clic en un link
document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('nav-active');
        menuToggle.classList.remove('active');

    });

});