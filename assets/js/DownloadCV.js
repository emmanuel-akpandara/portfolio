function downloadCV() {
    const link = document.createElement("a");
    link.href = "path/to/your/cv.pdf";
    link.download = "your_cv.pdf";
    link.click();
}
document.getElementById("cv-download-btn").addEventListener("click", downloadCV);