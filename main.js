
  document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('experienceChart').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['HTML/CSS', 'Bootstrap', 'JavaScript', 'other'],
        datasets: [{
          data: [50, 35, 10, 5], 
          backgroundColor: [
            '#4285F4', // blue
            '#1abc9c', // green
            '#fbc02d', // yellow
            '#e0e3e7'  // gray
          ],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '70%',
        plugins: {
          legend: { display: false }
        }
      }
    });
  });
  const modeToggle = document.getElementById('mode-toggle');
  const body = document.body;

  // Load mode from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    modeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  modeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    modeToggle.innerHTML = isDark
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
  
