/* 

Credit: Fireship io
Repo: https://github.com/fireship-io/222-responsive-icon-nav-css.git
Cloned with improvements to the original file.

 */

const themeMap = {
    dark: "light",
    light: "dark"
  };  

const theme = localStorage.getItem('theme') 
    || (tmp = Object.keys(themeMap)[0],
    localStorage.setItem('theme', tmp),
    tmp);

const text = document.getElementById('themeText');

text.innerHTML = localStorage.getItem('theme').toUpperCase();

const bodyClass = document.body.classList;
  
bodyClass.add(theme);
  
function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
    text.innerHTML = next.toUpperCase();
  }
  
document.getElementById('themeButton').onclick = toggleTheme;