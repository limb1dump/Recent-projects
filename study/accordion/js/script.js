const container = document.querySelector('.container'); // main listener 
const body = document.querySelector('.accordion__body'); // main listener 




// is this code ok?
const activateAccordion = (event) => {
    const ccurentElement = event.target.closest('.accordion');
    ccurentElement.firstElementChild.classList.toggle('active');
    ccurentElement.lastElementChild.classList.toggle('active');
    ccurentElement.firstElementChild.lastElementChild.classList.toggle('active');
}

//or this one is better? 
/*
const activateAccordion = (event) => {
    const accordion = event.target.closest('.accordion');
    const accordionHead = accordion.firstElementChild;
    const accordionBody = accordion.lastElementChild;
    const accordionIcon = accordionBody.lastElementChild;
    accordionHead.classList.toggle('active');
    accordionBody.classList.toggle('active');
    accordionIcon.classList.toggle('active');
}
*/

container.addEventListener('click', activateAccordion);
