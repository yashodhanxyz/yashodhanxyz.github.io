const bindGoalHandlers = () => {
  const elements = document.querySelectorAll('[data-analytics-goal]');
  elements.forEach((el) => {
    if (el.dataset.analyticsBound === 'true') {
      return;
    }

    el.dataset.analyticsBound = 'true';
    el.addEventListener('click', () => {
      const goal = el.dataset.analyticsGoal;
      if (!goal) return;
      if (typeof window.plausible === 'function') {
        window.plausible(goal);
      }
    });
  });
};

const init = () => {
  bindGoalHandlers();
  document.addEventListener('astro:after-swap', bindGoalHandlers);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
