//alert("ciao");
//console.log("ciao");

document.addEventListener("DOMContentLoaded",function(){
    const toggleButtom=document.querySelector(".hamburger-menu");
    const targetElement=document.querySelector(".sidebar-menu");
    const stopScroll=document.querySelector("body");

    toggleButtom.addEventListener("click",function(){
        targetElement.classList.toggle("active");
        stopScroll.classList.toggle("stop-scroll");
        console.log("ciao");
    });
    document.addEventListener("scroll",function(){
        const header=document.querySelector(".header-menu");
        if(window.scrollY>500){
            header.classList.add("sticky");
            //console.log("srcollo");
        } else {
            header.classList.remove("sticky");
           //console.log("remove-srcollo");
        }
    });
});