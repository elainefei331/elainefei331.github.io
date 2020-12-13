function showDetail(item) {
  var hash = item || 'maze';

  var content = document.getElementsByClassName("carousel-container")[0];
  if (!content.classList.contains("hide")) {
    content.classList.add('hide');
  }


  var content = document.getElementsByClassName("content-detail")[0];
  if (content.classList.contains("hide")) {
    content.classList.remove('hide');
  }

  var list = document.getElementsByClassName("detail-item");
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === item + '-detail' && list[i].classList.contains("hide")) {
      list[i].classList.remove("hide");
    }
    if (list[i].id !== item + '-detail' && !list[i].classList.contains("hide")) {
      list[i].classList.add("hide");
    }
  }

}

function switchItem(item) {

  var content = document.getElementsByClassName("content-detail")[0];
  if (!content.classList.contains("hide")) {
    content.classList.add('hide');
  }

  var content = document.getElementsByClassName("carousel-container")[0];
  if (content.classList.contains("hide")) {
    content.classList.remove('hide');
  }


  var list = document.getElementsByClassName("carousel-item");
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === item && !list[i].classList.contains("active")) {
      list[i].classList.add("active");
    }
    if (list[i].id !== item && list[i].classList.contains("active")) {
      list[i].classList.remove("active");
    }
  }
}
switchItem('maze');

function next() {
  var activeItem = document.getElementsByClassName("carousel-item active")[0];
  var nextItem = activeItem.nextElementSibling;
  if (!nextItem) {
    nextItem = document.getElementsByClassName("carousel-item")[0];
  }

  activeItem.classList.add("carousel-item-left");
  nextItem.classList.add("carousel-item-next");

  setTimeout(function () {
    activeItem.classList.remove("active");
    nextItem.classList.add("active");

    activeItem.classList.remove("carousel-item-left");
    nextItem.classList.remove("carousel-item-next");
  }, 600)
}

function prev() {
  var activeItem = document.getElementsByClassName("carousel-item active")[0];
  var nextItem = activeItem.previousElementSibling;
  if (!nextItem) {
    var itemList = document.getElementsByClassName("carousel-item");
    nextItem = itemList[itemList.length - 1];
  }

  activeItem.classList.add("carousel-item-right");
  nextItem.classList.add("carousel-item-prev");

  setTimeout(function () {
    activeItem.classList.remove("active");
    nextItem.classList.add("active");

    activeItem.classList.remove("carousel-item-right");
    nextItem.classList.remove("carousel-item-prev");
  }, 600)
}