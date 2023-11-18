const card = document.querySelectorAll('.panel');

for(let i = 0; i < card.length; i++){
    card[i].addEventListener('mouseover',(e) =>{
        e.target.classList.add('active');
    })
    card[i].addEventListener('mouseout', (e) =>{
        e.target.classList.remove('active');
    })
}