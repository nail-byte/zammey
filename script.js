const sidebar = document.querySelector('.sidebar');
const btn = document.getElementById('toggleBtn');

// Click to open/close
btn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

// Hide when mouse leaves the sidebar
sidebar.addEventListener('mouseLeave', () => {
    sidebar.classList.remove('active');
});