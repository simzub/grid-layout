import './styles.css';
const toggleButton = document.querySelector('.expand');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', function () {
    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {
        toggleButton.textContent = '>';
    } else {
        toggleButton.textContent = 'X';
    }
})