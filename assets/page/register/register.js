document.querySelectorAll('.account-card').forEach(card => {
  card.addEventListener('click', () => {
    const link = card.getAttribute('data-link');
    if(link) window.location.href = link;
  });
});
