const images = document.querySelectorAll('.carousel-images img');
let index =0;

function showImage(i){
    images.forEach(img => img.classList.remove('active'));
    images[i].classList.add('active');

}

setInterval(()=>{
    index=(index+1)% images.length;
    showImage(index);


    
}, 3500);