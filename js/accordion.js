export default function Accordion() {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", function () {
            const item = header.parentElement;
            const content = item.querySelector(".accordion-content");
            item.classList.toggle("open");

            if (item.classList.contains("open")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });
}