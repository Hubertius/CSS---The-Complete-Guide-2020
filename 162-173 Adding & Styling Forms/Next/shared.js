var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button'); // return table
var selectModalButtons = document.querySelectorAll('.modal button'); // return table
var modal = document.querySelector('.modal');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


for(var i=0; i < selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', function(){
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}
for(var i=0; i < selectModalButtons.length; i++){
    selectModalButtons[i].addEventListener('click', function(){
        modal.style.display = 'none';
        backdrop.style.display = 'none';
    });
}

backdrop.addEventListener('click', function(){
        mobileNav.style.display = 'none';
        backdrop.style.display = 'none';
});

toggleButton.addEventListener('click', function(){
        mobileNav.style.display = 'block';
        backdrop.style.display= 'block';
});