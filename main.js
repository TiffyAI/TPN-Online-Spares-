// simple mobile toggle and year injection
document.addEventListener('DOMContentLoaded', function(){
  // mobile nav toggle
  var toggle = document.getElementById('mobile-toggle');
  var nav = document.getElementById('main-nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('open');
    });
  }

  // fill copyright years
  var y = new Date().getFullYear();
  var els = [document.getElementById('year'), document.getElementById('year-2'), document.getElementById('year-3')];
  els.forEach(function(e){ if(e) e.textContent = y; });
});
