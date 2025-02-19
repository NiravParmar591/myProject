let btn = document.querySelectorAll(".btn");

btn.forEach((e) => {
    let num = document.querySelector(".num");
    // e.addEventListener("click" , () => {
        //     console.log("btn is clicked");
        //     console.log(e.value);
        //     num.innerHTML = e.value; 
        
        //     e.classList.add("active");
        // });
        
    e.addEventListener("click" , () => {
        // console.log("button is clicked");           
        Array.from(btn).forEach((b) => {
            b.classList.remove("active");
        });
        e.classList.add("active");
        num.innerHTML = e.value;
    });

});

document.querySelector(".sub_btn").addEventListener("click" , () => {    
    document.querySelector(".con").style.display = "none";
    document.querySelector(".message").style.display = "block";
}); 