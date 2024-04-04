var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'styles.css';
document.getElementsByTagName('head')[0].appendChild(link);

const open = document.getElementById('open');
const close = document.getElementById('close');

const modal = document.querySelector('.modal-wrapper');

open.onclick = () => {
  modal.style.display = 'flex';
}

close.onclick = () => {
  modal.style.display = 'none';
}