document.addEventListener("DOMContentLoaded", function () {
const expandButtons = document.querySelectorAll(".btn-expand");

expandButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const project = this.parentNode;
        const expandedInfo = project.querySelector (".expanded-info");

        if (expandedInfo.style.display === "block") {
            expandedInfo.style.display = "none";
            this.textContent = "Ver mais";}
            else {
                expandedInfo.style.display = 
                "block";
                this.textContent = "Ver Menos";
            }
    })
})



})