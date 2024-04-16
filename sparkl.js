//type.js
var myText = ' فكِّر،أبدِع،تألّق... ';
var index = 1;
function writeText() {
    document.querySelector('#txx').textContent = myText.slice(0, index)
    index++
    if (index > myText.length) {
        index = 1
    }
}
setInterval(function () {
    writeText();
}, 300)

