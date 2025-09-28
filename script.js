(() => {
  const bills = document.querySelectorAll('.bill');
  bills.forEach((b, idx) => {
    const base = 550; // match transform-origin for big bills
    const jitter = (Math.random() - 0.5) * 60;
    b.style.transformOrigin = `${base + jitter}px center`;
    b.style.animationDuration = `${9 + Math.random()*2}s`;
  });

  const xLink = document.getElementById('x-link');
  if (xLink) xLink.href = 'https://x.com/i/communities/1972087756521123954';
})();
