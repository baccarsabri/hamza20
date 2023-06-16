window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrolled > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });









