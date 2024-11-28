
//Funtion querySelector 
document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});


//funtion timeout & Interval seconds //variable hora local // padStart agg digitos hora
setInterval(function(){
    let localTime = new Date();
    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
},1000);

// Galery section array

const galleryImages = [
    {
        src: "./assets/gallery/medellin.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 3"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 4"
    },
    {
        src: "./assets/gallery/Feria.jpg",
        alt: "Thumbnail  Image 5"
    }
];

//variable img ppl, miniaturas
let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#galery .thumbnails");


mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;

//propiedades y atributos
galleryImages.forEach(function(image, index){
    let thumbn = document.createElement("img");
    thumbn.src = image.src;
    thumbn.alt = image.alt;
    thumbn.dataset.arrayIndex = index;
    thumbn.dataset.selected = index === 0 ? true : false;

    thumbn.addEventListener("click", function(e){
        let selectedIndex = e.target.dataset.arrayIndex;
        let selectedImage = galleryImages[selectedIndex]; 
        mainImage.src = selectedImage.src;
        mainImage.alt = selectedImage.alt;
        thumbnails.querySelectorAll("img").forEach(function(img){
            img.dataset.selected = false;
        });
        e.target.dataset.selected = true;

    });

    thumbnails.appendChild(thumbn);
    
});
