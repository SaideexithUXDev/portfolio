(function(){
  "use strict";

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- sticky nav shadow ---------- */
  var nav = document.querySelector('.site-nav');
  var progress = document.querySelector('.scroll-progress');
  function onScroll(){
    if(nav) nav.classList.toggle('is-scrolled', window.scrollY > 8);
    if(progress){
      var h = document.documentElement;
      var scrolled = (h.scrollTop || document.body.scrollTop);
      var max = h.scrollHeight - h.clientHeight;
      progress.style.width = (max > 0 ? (scrolled/max*100) : 0) + '%';
    }
  }
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* ---------- mobile drawer ---------- */
  var burger = document.querySelector('.nav-burger');
  var drawer = document.querySelector('.mobile-drawer');
  if(burger && drawer){
    burger.addEventListener('click', function(){
      drawer.classList.toggle('is-open');
    });
    drawer.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ drawer.classList.remove('is-open'); });
    });
  }

  /* ---------- portfolio mode switch (UX / MOTION / VISUAL) ---------- */
  var modeButtons = document.querySelectorAll('[data-set-mode]');
  var panels = document.querySelectorAll('[data-mode-panel]');
  function setMode(mode, push){
    document.body.setAttribute('data-mode', mode);
    modeButtons.forEach(function(btn){
      btn.classList.toggle('is-active', btn.getAttribute('data-set-mode') === mode);
    });
    panels.forEach(function(p){
      p.classList.toggle('is-active', p.getAttribute('data-mode-panel') === mode);
    });
    try{ sessionStorage.setItem('portfolioMode', mode); }catch(e){}
  }
  modeButtons.forEach(function(btn){
    btn.addEventListener('click', function(){ setMode(btn.getAttribute('data-set-mode')); });
  });
  if(modeButtons.length){
    var initial = 'ux';
    try{ initial = sessionStorage.getItem('portfolioMode') || 'ux'; }catch(e){}
    setMode(initial);
  }

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && revealEls.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:.15, rootMargin:'0px 0px -60px 0px'});
    revealEls.forEach(function(el, i){
      el.style.setProperty('--i', i % 8);
      io.observe(el);
    });
  } else {
    revealEls.forEach(function(el){ el.classList.add('is-visible'); });
  }

  /* ---------- hero interactive canvas (cursor parallax) ---------- */
  var heroVisual = document.querySelector('.hero-visual');
  if(heroVisual && !prefersReduced){
    var tiles = heroVisual.querySelectorAll('.ui-tile');
    var targetX = 0, targetY = 0, curX = 0, curY = 0;
    heroVisual.addEventListener('mousemove', function(e){
      var rect = heroVisual.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - .5) * 2;
      targetY = ((e.clientY - rect.top) / rect.height - .5) * 2;
    });
    heroVisual.addEventListener('mouseleave', function(){ targetX = 0; targetY = 0; });
    function raf(){
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;
      tiles.forEach(function(tile, i){
        var depth = (i + 1) * 6;
        tile.style.transform = 'translate3d(' + (curX*depth) + 'px,' + (curY*depth) + 'px,0)';
      });
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  /* ---------- magnetic buttons ---------- */
  if(!prefersReduced){
    document.querySelectorAll('.magnetic').forEach(function(el){
      var strength = 18;
      el.addEventListener('mousemove', function(e){
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width/2) / (r.width/2);
        var y = (e.clientY - r.top - r.height/2) / (r.height/2);
        el.style.transform = 'translate(' + (x*strength) + 'px,' + (y*strength) + 'px)';
      });
      el.addEventListener('mouseleave', function(){ el.style.transform = ''; });
    });
  }

  /* ---------- motion cards: hover / touch plays the gif, poster otherwise ---------- */
  document.querySelectorAll('.motion-card').forEach(function(card){
    var gif = card.querySelector('.gif-src');
    if(!gif) return;
    if(prefersReduced){ return; }
    var enable = function(){ card.classList.add('is-playing'); };
    var disable = function(){ card.classList.remove('is-playing'); };
    card.addEventListener('mouseenter', enable);
    card.addEventListener('mouseleave', disable);
    card.addEventListener('touchstart', function(){ card.classList.toggle('is-playing'); }, {passive:true});
  });

  /* ---------- floating "Let's talk" button ---------- */
  var floatCta = document.querySelector('.floating-cta');
  var heroEl = document.querySelector('.hero');
  if(floatCta && heroEl && 'IntersectionObserver' in window){
    var io2 = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        floatCta.classList.toggle('is-visible', !entry.isIntersecting);
      });
    }, {threshold:0});
    io2.observe(heroEl);
  } else if(floatCta){
    floatCta.classList.add('is-visible');
  }

  /* ---------- current year ---------- */
  document.querySelectorAll('[data-year]').forEach(function(el){
    el.textContent = new Date().getFullYear();
  });

})();
