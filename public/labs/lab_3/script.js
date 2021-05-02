
   	let slider = document.querySelector('#slider');

    let list = slider.querySelector('ul.list');
    let imgs = slider.querySelectorAll('img');

    let pos = 0;
    let prev = slider.querySelector('.prev');
    let next = slider.querySelector('.next');
    

    let arr = ["images/onigiri_1.png","images/onigiri_2.png","images/onigiri_3.png","images/onigiri_4.png","images/roll_1.png","images/roll_2.png","images/roll_3.png"]; 

	prev.onclick = function(){
	    let img =  arr.pop()
	    arr.unshift(img)
	    imgs.forEach(function(item, index) {
	    	item.src = arr[index];
	    })
	    return true;
	}
	next.onclick = function(){
	    let img = arr.shift()
	    arr.push(img); 
	    imgs.forEach(function(item, index) {
	    	item.src = arr[index];
	    })
	    return true;
	}
    
  