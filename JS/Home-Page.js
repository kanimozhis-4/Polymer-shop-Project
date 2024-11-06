// Get elements
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebar-overlay");
// Function to open the sidebar
function openSidebar() {
    sidebar.style.left = "0";
    overlay.style.display = "block";
}

// Function to close the sidebar
function closeSidebar() {
    sidebar.style.left = "-80vw";
    overlay.style.display = "none";
}


// Event listener to open sidebar when clicking the menu toggle
menuToggle.addEventListener("click", openSidebar);

// Event listener to close sidebar when clicking outside (overlay)
overlay.addEventListener("click", closeSidebar);
// let lastScrollTop = 0;
// const itemList = document.getElementById('scroll-item');

// window.addEventListener('scroll', () => {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
//     let maxScrollTop=0;
//     maxScrollTop=Math.max(scrollTop,maxScrollTop)  

//     if (maxScrollTop >lastScrollTop) {
//         // Scrolling up
//         itemList.classList.add('sticky');
//     } else {
//         // Scrolling down
//         itemList.classList.remove('sticky');
//     }

//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
// });