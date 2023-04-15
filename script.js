const netflixLogo = document.getElementById('netflix-logo');
const logoContainer = document.querySelector('.logo-container');

const showLogo = () => {
  netflixLogo.style.width = '100%';
  netflixLogo.style.opacity = '1';
}

setTimeout(showLogo, 1000);
