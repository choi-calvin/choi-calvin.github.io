const isMobile = function () {
  if (window.screen.width <= 961) {
    return true;
  }
  return false;
}

export default isMobile;