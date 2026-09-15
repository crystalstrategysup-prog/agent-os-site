const copy = document.querySelector('#copy');
copy?.addEventListener('click', async () => {
  await navigator.clipboard.writeText(copy.dataset.command);
  copy.textContent = 'Скопировано';
  window.setTimeout(() => { copy.textContent = 'Копировать'; }, 1800);
});
