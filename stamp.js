// stamp.js — Badge/stamp next to owner name
(function(){
  'use strict';

  function injectStamp(){
    // ابحث عن كل عناصر اسم المالك
    var selector = '.footer-owner, .footer-owner strong, .owner strong, .names-footer .owner strong';
    var targets = document.querySelectorAll('.footer-owner, .owner');

    targets.forEach(function(el){
      if(el.querySelector('.owner-stamp')) return; // موجود مسبقاً
      var stamp = document.createElement('span');
      stamp.className = 'owner-stamp';
      stamp.title = 'موثّق · Verified';
      stamp.innerHTML =
        '<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">' +
          '<defs>' +
            '<linearGradient id="stampGrad1" x1="0%" y1="0%" x2="100%" y2="100%">' +
              '<stop offset="0%" stop-color="#e6c988"/>' +
              '<stop offset="50%" stop-color="#c9a961"/>' +
              '<stop offset="100%" stop-color="#a67c3c"/>' +
            '</linearGradient>' +
            '<radialGradient id="stampGrad2" cx="50%" cy="50%" r="50%">' +
              '<stop offset="0%" stop-color="#fff" stop-opacity=".3"/>' +
              '<stop offset="100%" stop-color="#fff" stop-opacity="0"/>' +
            '</radialGradient>' +
          '</defs>' +
          '<circle cx="20" cy="20" r="18" fill="url(#stampGrad1)" stroke="#8b6f47" stroke-width="1.2"/>' +
          '<circle cx="20" cy="20" r="15" fill="none" stroke="#fff" stroke-width=".8" opacity=".7"/>' +
          '<circle cx="20" cy="20" r="13.5" fill="none" stroke="#8b6f47" stroke-width=".5" opacity=".5" stroke-dasharray="1,1.5"/>' +
          '<path d="M11 20 L17 26 L29 14" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
          '<circle cx="20" cy="20" r="18" fill="url(#stampGrad2)"/>' +
        '</svg>';
      el.appendChild(stamp);
    });
  }

  // CSS
  var css = document.createElement('style');
  css.textContent =
    '.owner-stamp{display:inline-block;width:22px;height:22px;vertical-align:middle;margin-right:6px;margin-left:4px;position:relative;top:-1px;filter:drop-shadow(0 2px 4px rgba(201,169,97,.4));animation:stampPop .6s cubic-bezier(.34,1.56,.64,1)}' +
    '.owner-stamp svg{width:100%;height:100%;display:block}' +
    '@keyframes stampPop{0%{transform:scale(0) rotate(-180deg);opacity:0}60%{transform:scale(1.15) rotate(10deg);opacity:1}100%{transform:scale(1) rotate(0)}}' +
    '.owner-stamp:hover{animation:stampGlow .8s ease-in-out infinite alternate}' +
    '@keyframes stampGlow{from{filter:drop-shadow(0 2px 4px rgba(201,169,97,.4))}to{filter:drop-shadow(0 2px 12px rgba(201,169,97,.9))}}';

  if(document.head){
    document.head.appendChild(css);
  } else {
    document.addEventListener('DOMContentLoaded', function(){
      document.head.appendChild(css);
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', injectStamp);
  } else {
    injectStamp();
  }
})();
