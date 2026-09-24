const buttons = document.querySelectorAll('.theme-toggle');
const themeKey = 'portfolio-theme';

function setTheme(isDark) {
    document.body.classList.toggle('dark-theme', isDark);

    buttons.forEach((button) => {
        button.setAttribute(
            'aria-label',
            isDark ? 'Switch to light theme' : 'Switch to dark theme'
        );
        button.setAttribute('aria-pressed', isDark);
        button.querySelector('.theme-symbol').textContent = isDark ? '☾' : '☼';
    });
}

setTheme(localStorage.getItem(themeKey) === 'dark');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark-theme');

        setTheme(isDark);
        localStorage.setItem(themeKey, isDark ? 'dark' : 'light');
    });
});
