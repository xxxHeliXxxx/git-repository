/*var input = document.getElementById("Name", "Comment");
var result = document.getElementById("form_result");

input.onkeyup = input.oncopy = input.onpaste = input.oncut = (function () {
    return function () {
        result.innerHTML = this.value;
    }
})();*/

const input = document.querySelector('.comment', '.name');
const btn = document.querySelector('.add');

btn.addEventListener('click', clickHandler);

function clickHandler() {
    const value = input.value;
    console.log(value);
    if (!value) {
        input.classList.add("error");
    }
} 