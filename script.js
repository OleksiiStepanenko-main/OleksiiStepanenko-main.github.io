let icon = document.getElementsByClassName('icon');

function showMenu() {
let links = document.getElementsByClassName('nav-links');
Array.prototype.forEach.call(links, function(links) {
  if (links.style.display === 'none') links.style.display = 'block';
  else links.style.display = 'none'; 
  }
)
};
