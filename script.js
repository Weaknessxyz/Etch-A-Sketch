const container = document.createElement('div');
container.classList.add('grid-container');
document.body.appendChild(container);

for (i = 1; i <= 256; i++) {
    container.appendChild(document.createElement('div'));
    container.lastElementChild.classList.add('grid-item');
}

const squares = document.querySelectorAll('.grid-item');
squares.forEach((div) => {
    div.addEventListener('mouseover', function(e) {
        e.target.classList.add('active');
    });
});


