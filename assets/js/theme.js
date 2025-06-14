document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");

    const darkTheme = {
        '--bg-main': '#201715',
        '--bg-header': '#2a1e1b',
        '--bg-card': '#2e2321cc',
        '--bg-section': '#251b19',
        '--accent-white': '#edeceb',
        '--text-main': '#edeceb',
        '--text-muted': '#d6d3d2'
    };
    const lightTheme = {
        '--bg-main': '#edeceb',
        '--bg-header': '#e3e0df',
        '--bg-card': '#ffffffcc',
        '--bg-section': '#f7f6f5',
        '--accent-white': '#201715',
        '--text-main': '#201715',
        '--text-muted': '#5a5a5a'
    };

    function setTheme(theme, iconChar) {
        for (const key in theme) {
            document.documentElement.style.setProperty(key, theme[key]);
        }
        icon.textContent = iconChar;
    }

    // Leer preferencia guardada
    let isDark = localStorage.getItem('theme') !== 'light';
    setTheme(isDark ? darkTheme : lightTheme, isDark ? "🌙" : "☀️");

    toggle.addEventListener("click", function () {
        isDark = !isDark;
        setTheme(isDark ? darkTheme : lightTheme, isDark ? "🌙" : "☀️");
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});