
   	let slider = document.querySelector('#slider');
    let width = 150; 
    let count = 3;

    let list = slider.querySelector('ul');
    let lis = slider.querySelectorAll('li');

    let pos = 0;
    let prev = slider.querySelector('.prev');
    let next = slider.querySelector('.next');
    // left
    prev.onclick = function() {
      pos = pos + width * count;
      pos = Math.min(pos, 0);
      list.style.marginLeft = pos + 'px';
    };
    // right
    next.onclick = function() {
      pos = pos - width * count;
      pos = Math.max(pos, -width * (lis.length - count));
      list.style.marginLeft = pos + 'px';
    };
  