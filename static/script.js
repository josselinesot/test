

document.addEventListener('DOMContentLoaded', (event) => {
    const body = document.body;
    const modeToggle = document.querySelector('.mode-toggle');
    const sidebar = document.querySelector('nav');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const currentMode = localStorage.getItem('theme');

    if (currentMode) {
        body.classList.add(currentMode);
    }

    modeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            localStorage.setItem('theme', '');
        } else {
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('close');
    });
});
