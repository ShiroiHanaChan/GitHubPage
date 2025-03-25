// Link the constants to be fetched in the form
const formChessboardGen = document.querySelector('.chessboard-generator');
const formOddOrEven = document.querySelector('.odd-or-even');

// Select my grid so I can dynamically change the template columns defined according to the valued input in genX
const gridChessboard = document.querySelector('.grid');

// Link to results, will be used by the odd or even function
let resultsOutput = '';
let resultsOddOrEven = document.getElementById('resultsOutput');

let colorArray = ['white', 'black'];

resultsOutput.innerHTML = `Hi`;
// Define the odd or even function
function oddOrEven(tileX, tileY) {
    // Needs a check if the input values are above 0
    if (tileX === tileY) {
        return `white!`;
    } else if ((tileX % 2 === 0 || tileY % 2 === 0) && (tileX % 2 === 1 || tileY % 2 === 1)) {
        return `black!`;
    } else {
        return `white!`;
    }
}

// This function accepts the input genY, which controls the rows added to the board, and alternates between starting
// with black and white!
function addChessRowOdd(genX, genY) {
    console.log('Started function, genX: ', genX,' genY: ', genY);
    let cells = genX * genY;
    let repeat = Math.floor(genY / 2);
    let modulo = genY % 2;
    let k = 0; // Declares and resets K
    console.log('cells...', cells);
    // Clears the .grid element in case the algorithm gets re-run without reloading the browser
    gridChessboard.innerHTML = '';
    if (genX % 2 !== 0) {
        for (let i = 1; i <= cells; i++) {
            // For each loop, a NEW element 'div' is being created and appended, since an element can only in one
            // place at a time, this prevents from the same elements newDiv being 'moved around to the same exact
            // place in a way'
            const newDiv = document.createElement('div');
            newDiv.classList.add('block');
            gridChessboard.appendChild(newDiv);
            console.log('i: ', i);
            /* Simply determines if the NEWLY created newDiv will have a class of black or white, depending if 'i',
             aka the cell is odd or even */
            newDiv.classList.add(colorArray[i%2]); // Increases performance
            /*if (i % 2 == 0) {
                newDiv.classList.add('black');
            } else {
                newDiv.classList.add('white');
            }*/
        }
    } else {
        do {
            const newDiv = document.createElement('div');
            newDiv.classList.add('block');
            gridChessboard.appendChild(newDiv);
            // If k reaches the end of the 'chessboard line' we will swap the two values present in the array, ad
            // infinitum
            if (k % genX === 0)
                [colorArray[0], colorArray[1]] = [colorArray[1], colorArray[0]];
            newDiv.classList.add(colorArray[k%2]);
            k++;
        } while (k < cells); // Solves any issues if genY = 1... or something like that!
    }
}

// Chessboard generator submit event handler
formChessboardGen.addEventListener('submit', function(event) {
    event.preventDefault();
        const genX = Number(document.getElementById('chess-generatorX').value);
        const genY = Number(document.getElementById('chess-generatorY').value);
    if (isNaN(genX) || isNaN(genY)) {
        resultsOutput.innerHTML = 'Please input only numbers!';
        console.log('Please input only numbers!');
        return;
    }
            gridChessboard.style.gridTemplateColumns = `repeat(${genX}, 1fr)`;
            addChessRowOdd(genX, genY);
    }
);

// Odd or even submit event handler
formOddOrEven.addEventListener('submit', function(event) {
    event.preventDefault();
        const tileX = Number(document.getElementById('odd-evenX').value);
        const tileY = Number(document.getElementById('odd-evenY').value);
    if (isNaN(tileX) || isNaN(tileY)) {
        resultsOutput.innerHTML = 'Please input only numbers!';
        return;
    }
            resultsOddOrEven.innerHTML = `The tile is ${oddOrEven(tileX, tileY)}`;
    }
);