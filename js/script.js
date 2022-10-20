adaptiveMenu();
dinamicAdaptive();


function adaptiveMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', () => {
    document.body.classList.toggle('_lock'); // что бы не скролился сайт при открытом меню
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
  })
}


function dinamicAdaptive() {
  const parentOriginal = document.querySelector('.header__container');
  const parent = document.querySelector('.menu__body');
  const item = document.querySelector('.header__column_last');

  window.addEventListener('resize', function(event) {
    move();
  })

  move();

  function move() {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewportWidth < 767) {
      if (!item.classList.contains('done')) {
        parent.insertBefore(item, parent.children[1]);
        item.classList.add('done');
      }
    } else {
      if (item.classList.contains('done')) {
        parentOriginal.insertBefore(item, parentOriginal[1]);
        item.classList.remove('done');
      }
    }
  }
}
