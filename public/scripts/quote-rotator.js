const initRotator = () => {
  const rotator = document.querySelector('[data-quote-rotator]');
  if (!rotator) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const quotes = Array.from(rotator.querySelectorAll('[data-quote-index]'));
  if (quotes.length === 0) return;

  const dots = Array.from(rotator.querySelectorAll('[data-role="dot"]'));
  const prevButton = rotator.querySelector('[data-role="prev"]');
  const nextButton = rotator.querySelector('[data-role="next"]');
  let activeIndex = 0;
  let intervalId;

  const setActive = (index) => {
    activeIndex = (index + quotes.length) % quotes.length;
    quotes.forEach((quote, idx) => {
      const isActive = idx === activeIndex;
      quote.dataset.active = String(isActive);
      quote.classList.toggle('quote--active', isActive);
      quote.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      quote.tabIndex = isActive ? 0 : -1;
    });
    dots.forEach((dot, idx) => {
      dot.setAttribute('aria-selected', idx === activeIndex ? 'true' : 'false');
    });
  };

  const stopRotation = () => {
    if (intervalId) {
      window.clearInterval(intervalId);
      intervalId = undefined;
    }
  };

  const startRotation = () => {
    if (prefersReduced.matches || quotes.length <= 1) return;
    stopRotation();
    intervalId = window.setInterval(() => {
      setActive(activeIndex + 1);
    }, 7000);
  };

  prevButton?.addEventListener('click', () => {
    stopRotation();
    setActive(activeIndex - 1);
    startRotation();
  });

  nextButton?.addEventListener('click', () => {
    stopRotation();
    setActive(activeIndex + 1);
    startRotation();
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const target = Number.parseInt(dot.dataset.quoteTarget ?? '0', 10);
      if (Number.isInteger(target)) {
        stopRotation();
        setActive(target);
        startRotation();
      }
    });
  });

  rotator.addEventListener('mouseenter', stopRotation);
  rotator.addEventListener('mouseleave', startRotation);
  rotator.addEventListener('focusin', stopRotation);
  rotator.addEventListener('focusout', startRotation);

  const handleMotionChange = (event) => {
    if (event.matches) {
      stopRotation();
    } else {
      startRotation();
    }
  };

  if (typeof prefersReduced.addEventListener === 'function') {
    prefersReduced.addEventListener('change', handleMotionChange);
  } else if (typeof prefersReduced.addListener === 'function') {
    prefersReduced.addListener(handleMotionChange);
  }

  setActive(0);
  startRotation();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRotator, { once: true });
} else {
  initRotator();
}
