'use-strict'; 
const gallery = document.querySelector('.gallery');
const galleryUl = gallery.querySelector('ul');
const galleryUlLi = galleryUl.querySelectorAll('li');
const liSize = galleryUlLi.length;
const arrBg = [];

function autoGo(num) {
  const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft
  const goto = (-gap * num) + 'px'
  gallery.style.left = goto;
  gallery.classList.add('gallery-ani')
}

function autoAdd(num){
  itemsUlLi.forEach((el, idx1) => {
    if (idx1 === num) {
      el.classList.add('on')
    } else {
      el.classList.remove('on')
    }
  });
}

for (let i = 0; i < liSize; i++) {
  arrBg.push(`url(img/gallery${i}.jpg) no-repeat 50%/cover`)
  galleryUlLi[i].style.background = arrBg[i];
}

let i = -1;

const autoGallery = () => {
  i++

  autoAdd(i);
  autoGo(i);

  if (i >= liSize - 1) i = -1;
}

let setIn = setInterval(autoGallery, 2000);

const centerBtn = document.querySelector('.center-btn')
const arrow = document.querySelectorAll('span.arrow');
const arrowImg = document.querySelectorAll('span.arrow img');

centerBtn.addEventListener('mouseover', (e) => {
  const eTarget = e.target;
  arrowImg.forEach(el => {
    if (el === eTarget) {
      clearInterval(setIn);
    }
  });
});

centerBtn.addEventListener('mouseout', (e) => {
  const eTarget = e.target;
  arrowImg.forEach(el => {
    if (el === eTarget) {
      setIn = setInterval(autoGallery, 2000);
    }
  });
});

const items = document.querySelector('.items');
const itemsUl = items.querySelector('ul');
const itemsUlLi = itemsUl.querySelectorAll('li');

itemsUl.addEventListener('mouseover', (e) => {
  const eTarget = e.target;
  itemsUlLi.forEach(el => {
    if (el === eTarget) {
      clearInterval(setIn);
    }
  });
});

itemsUl.addEventListener('mouseout', (e) => {
  const eTarget = e.target;
  itemsUlLi.forEach(el => {
    if (el === eTarget) {
      setIn = setInterval(autoGallery, 2000);
    }
  });
});

itemsUl.addEventListener('click', (e) => {
  const eTarget = e.target;
  itemsUlLi.forEach((el, idx) => {
    if (eTarget === el) {
      el.classList.add('on')
      
      console.log(`idx -> ${idx}`)

      autoGo(num);
     
    } else {
      el.classList.remove('on')
    }
  });
});

centerBtn.addEventListener('click', (e) => {

  const eTarget = e.target;

  arrowImg.forEach((el, idx) => {
    if (el === eTarget) {
      if (idx == 0) {
        // 왼쪽
        if (i <= 0) i = galleryUlLi.length;
        i--;
      
        autoGo(i);
        autoAdd(i);
      
      } else if (idx == 1) {
        // 오른쪽
        if (i >= galleryUlLi.length - 1) i = -1;
        i++;

        autoGo(i);
        autoAdd(i);
       
      }
    }
  });
});