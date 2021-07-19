document.querySelector('.bagger').addEventListener('click', function () {
    var target = this;
    var menu = document.querySelector('.nav')

    target.classList.toggle('hide');
    
    // setTimeout(function () {
        target.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    // }, 600)
});