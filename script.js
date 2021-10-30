const container = document.createElement('div');
container.classList.add('grid-container');
document.body.appendChild(container);

const newGridBtn = document.querySelector('.top-container button');
newGridBtn.addEventListener('click', function() {
    createNewGrid(userInput());
});

createNewGrid(16);

function addSqrEventListener() {
    const squares = document.querySelectorAll('.grid-item');
    squares.forEach((div) => {
        div.addEventListener('mouseover', function(e) {
            e.target.classList.add('active');
        });
    });
}

function createNewGrid(numberOfSquares) {

    if (numberOfSquares > 100) {
        alert("The amount of squares per side can't be higher than 100!");
        return;

    } else {
        container.textContent = '';
        container.setAttribute('style', `grid-template-columns: repeat(${numberOfSquares}, auto)`);
        for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
            container.appendChild(document.createElement('div'));
            container.lastElementChild.classList.add('grid-item');
        }
    }
    addSqrEventListener();
}

function userInput() {
    return Number(prompt('Enter the number of squares per side: '));
}