// Keep the reading navigation in sync without taking over native links.
const readerSections = document.querySelectorAll('.reading-text section[id]');
if (readerSections.length && 'IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.reader-nav a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, {rootMargin: '-5% 0px -65% 0px'});
  readerSections.forEach(section => observer.observe(section));
}
