let counts = {
    javascript: 0,
    python: 0,
    java: 0
};

function vote(language) {
    counts[language]++;
    document.getElementById(`${language}-count`).textContent = counts[language];
}

setInterval(() => {
    counts.javascript++;
    document.getElementById(`javascript-count`).textContent = counts.javascript;
}, 2000);
setInterval(() => {
    counts.python++;
    document.getElementById(`python-count`).textContent = counts.python;
}, 2500);
setInterval(() => {
    counts.java++;
    document.getElementById(`java-count`).textContent = counts.java;
}, 1500);