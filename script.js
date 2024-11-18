const sec_5 = document.querySelectorAll(".accordion-container");

sec_5.forEach(function(accordion){
    accordion.addEventListener("click" ,function () {
        //get the data
        const data = this.nextElementSibling; // get data
        data.classList.toggle("show");
        const icon = this.querySelector("i");
        icon.classList.toggle("animate");
    }); 
});