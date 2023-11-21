let nav = document.querySelector('#nav');
fetch('./header/header.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML = data;
})