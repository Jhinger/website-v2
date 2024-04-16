export default function smoothScrollToCenter(element: string) {
  const elem = document.getElementById(element);

  if (!elem) {
    console.log(`Element with id ${element} not found`);
    return;
  };

  const topOffset = elem.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  const scrollPosition = topOffset - (screenHeight / 2) + (elem.offsetHeight / 2);

  window.scroll({
      top: scrollPosition,
      behavior: 'smooth'
  });
}