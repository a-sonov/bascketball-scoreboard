
let sumH = 0
let sumG = 0
document.getElementById('sumH').textContent = sumH

function addOneH() {
    sumH += 1
    document.getElementById('sumH').textContent = sumH
}

function addTwoH() {
    sumH += 2
    document.getElementById('sumH').textContent = sumH
}

function addThreeH() {
    sumH += 3
    document.getElementById('sumH').textContent = sumH
}

function addOneG() {
    sumG += 1
    document.getElementById('sumG').textContent = sumG
}

function addTwoG() {
    sumG += 2
    document.getElementById('sumG').textContent = sumG
}

function addThreeG() {
    sumG += 3
    document.getElementById('sumG').textContent = sumG
}

function reset() {
    sumH = 0
    sumG = 0
    document.getElementById('sumH').textContent = sumH
    document.getElementById('sumG').textContent = sumG
}


