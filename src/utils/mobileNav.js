const mobileNav = () => {
  const barsBtn = document.querySelector('#bars-btn');
  const mobileNav = document.querySelector('#mobile-nav');
  const closeBtn = document.querySelector('#close-btn');

  const handleBarsBtn = () => (mobileNav.style.display = 'flex');
  const handleCloseBtn = () => (mobileNav.style.display = 'none');

  barsBtn.addEventListener('click', handleBarsBtn);
  closeBtn.addEventListener('click', handleCloseBtn);
};

export default mobileNav;
