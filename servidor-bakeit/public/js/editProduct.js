
window.addEventListener('load',function(){

    const edit = document.getElementById('edit');
    const myOffcanvas = document.getElementById('offcanvasRight')
    if(edit.dataset.edit=="true"){
        var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas); 
        bsOffcanvas.show();
    }

});