'use strict'

var contactButton = document.querySelector('.contact__button');
var popupForm = document.querySelector('.callform');
var closePopup = document.querySelector('.callform__close');
var popupLogin = popupForm.querySelector('[name=callform-login]');
var popupPhone = popupForm.querySelector('[name=callform-tel]');
var popupText = popupForm.querySelector('[name=callform-email]');
var pageMask= document.querySelector('.mask');
var isStorageSupport = true;
var storage = "";
var body = document.querySelector('body');

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

var addClass = function (element, selector) {
  element.classList.add(selector);
};

var removeClass = function (element, selector) {
  element.classList.remove(selector);
};

var toggleClass = function (element, selector) {
  element.classList.toggle(selector);
};

if (contactButton) {
    contactButton.addEventListener('click', function () {
      addClass(popupForm, 'callform__active');
      if (storage) {
        popupLogin.value = localStorage.getItem('login');
        popupPhone.value = localStorage.getItem('phone');
        popupText.value = localStorage.getItem('email');
      }
    popupLogin.focus();
    addClass(body, 'body__overflow');
    addClass(pageMask, 'mask-active');
  })
}

if (closePopup) {
    closePopup.addEventListener('click', function () {
      removeClass(popupForm, 'callform__active');
      removeClass(body, 'body__overflow');
      removeClass(pageMask, 'mask-active');
    })

    if (pageMask) {
      pageMask.addEventListener('click', function () {
        removeClass(popupForm, 'callform__active');
        removeClass(body, 'body__overflow');
        removeClass(pageMask, 'mask-active');
      })
    }

    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        removeClass(popupForm, 'callform__active');
        removeClass(body, 'body__overflow');
        removeClass(pageMask, 'mask-active');
      }
    });
  }

  if (popupForm) {
    popupForm.addEventListener('submit', function () {
      if (isStorageSupport) {
      localStorage.setItem('login', popupLogin.value)
      localStorage.setItem('phone', popupPhone.value)
      localStorage.setItem('email', popupText.value)
    }
  });
}