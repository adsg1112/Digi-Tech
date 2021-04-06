const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLigth = document.querySelector('.agregar-imagen')
const contenedorligth = document.querySelector('.imagen-ligth')


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerimagen(imagen.getAttribute('src'))
    })
})

contenedorligth.addEventListener('click', (e)=>{
    if(e.target != imagenesLigth){
        contenedorligth.classList.toggle('show')
        imagenesLigth.classList.toggle('showImage')
    }
}
)



const aparecerimagen = (imagen)=>{
    imagenesLigth.src = imagen;
    contenedorligth.classList.toggle('show')
    imagenesLigth.classList.toggle('showImage')
}