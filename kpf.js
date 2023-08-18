document.addEventListener("DOMContentLoaded", function () {
    const photosButton = document.getElementById("photos");
    photosButton.addEventListener("click", function () {
        // Implement photo download logic here
        // Redirect user to a photos page or trigger a download action
    });

    const sessionRadios = document.querySelectorAll("input[type='radio']");
    sessionRadios.forEach(radio => {
        radio.addEventListener("click", function () {
            const sectionNumber = this.closest(".session").querySelector("h2").textContent.replace("Section ", "");
            const qualityOptions = ["360p", "240p", "720p"];
            // Implement video download logic here using sectionNumber and qualityOptions
            // Redirect user to the appropriate video download page or trigger a download action
        });
    });
});
