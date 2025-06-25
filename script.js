const toggleBtn=document.querySelector('.toggle_btn');
const toggleBtnIcon=document.querySelector('.toggle_btn i');
const dropDownmenu=document.querySelector('.dropdown_menu');


toggleBtn.onclick = function () {
    dropDownmenu.classList.toggle('open')
    const isOpen=dropDownmenu.classList.contains('open')

    toggleBtnIcon.classList=isOpen?'fa-solid fa-xmark':'fa-solid fa-bars';
}
function showdropdown(){
    dropDownmenu.style.display='block';
}
function hidedropdown(){
    dropDownmenu.style.display='none';
}