const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeSwitchTogleRef = document.querySelector('#theme-switch-toggle');
const currentTheme = localStorage.getItem('theme');
themeSwitchTogleRef.addEventListener('change', onThemeSwitchChange);

checkTheme();

function onThemeSwitchChange(e) {
  if (!e.currentTarget.checked) {
    setLightTheme();
  } else setDarkTheme();
}

function checkTheme() {
  if (currentTheme === Theme.DARK) {
    themeSwitchTogleRef.checked = true;
    document.body.classList.add(Theme.DARK);
  } else document.body.classList.add(Theme.LIGHT);
}

function setDarkTheme() {
  localStorage.setItem('theme', Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  document.body.classList.add(Theme.DARK);
}

function setLightTheme() {
  localStorage.setItem('theme', Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  document.body.classList.add(Theme.LIGHT);
}
