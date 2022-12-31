
function changeTheme() {
    if (themeIndex >= 2) {
        themeIndex = 0;
    } else {
        themeIndex++;
    }

    const themesList = ['brasil', 'light', 'dark'];
    setTheme(themesList[themeIndex]);
}

function setTheme(theme) {
    document.documentElement.classList = theme;
}

let prefersColor = window.matchMedia('(prefers-color-scheme: light)')
        .matches ? 'brasil' : 'dark'
setTheme(prefersColor)

var themeIndex = prefersColor === 'brasil' ? 0 : 2;

document.querySelector('main').addEventListener('click', changeTheme);
