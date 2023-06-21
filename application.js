window.addEventListener('mousemove', (event) => {
  const x = event.pageX;
  const y = event.pageY;

  const cursor = document.querySelector('.cursor');

  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
})
