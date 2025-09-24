// Load header dynamically using fetch
fetch('/public/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(err => console.error('Error loading header:', err));

// Load footer dynamically using fetch
fetch('/public/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(err => console.error('Error loading footer:', err));
