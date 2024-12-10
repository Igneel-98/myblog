var btn = document.getElementsByClassName("myBtn");
var modal = document.getElementsByClassName("modal");
var close = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
function setDataIndex() {

    for (i = 0; i < btn.length; i++)
    {
        btn[i].setAttribute('data-index', i);
        modal[i].setAttribute('data-index', i);
        close[i].setAttribute('data-index', i);
    }
}

for (i = 0; i < btn.length; i++)
{
    btn[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modal[ElementIndex].style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    close[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modal[ElementIndex].style.display = "none";
    };
}

window.onload = function() {

    setDataIndex();
};

window.onclick = function(event) {
    if (event.target === modal[event.target.getAttribute('data-index')]) {
        modal[event.target.getAttribute('data-index')].style.display = "none";
    }

};