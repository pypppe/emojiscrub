const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
favicon.rel = 'icon';
document.head.appendChild(favicon);

function updateFavicon(isDark) {
  favicon.href = isDark ? '/images/favicon_darkmode.png' : '/images/favicon_whitemode.png';
}

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
updateFavicon(darkModeQuery.matches);
darkModeQuery.addEventListener('change', e => updateFavicon(e.matches));
