
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebar-overlay");

function openSidebar() {
    sidebar.style.left = "0";
    overlay.style.display = "block";
}


function closeSidebar() {
    sidebar.style.left = "-80vw";
    overlay.style.display = "none";
}



menuToggle.addEventListener("click", openSidebar);

overlay.addEventListener("click", closeSidebar);
