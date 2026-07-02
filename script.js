const form = document.getElementById('contactForm');
const statusEl = document.getElementById('status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());

  try {
    const res = await fetch('http://127.0.0.1:8000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    statusEl.textContent = json.message || 'Sent successfully';
    form.reset();
  } catch (err) {
    statusEl.textContent = 'Backend not reachable yet.';
  }
});