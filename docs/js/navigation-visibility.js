/* Keep the project-resource navigation focused on the public-facing pages. */
(() => {
  const path = window.location.pathname.replace(/\/+/g, "/");
  const showProjectNavigation = /\/(?:blog|leaderboard|tutorials)(?:\/|$)/.test(path);
  document.documentElement.classList.toggle("llmr-resource-nav", showProjectNavigation);
})();
