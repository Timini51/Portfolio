//chart
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript'],
        datasets: [{
            label: 'Skill Proficiency (%)',
            data: [99, 85, 70], // Example proficiency percentages
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: 'rgba(255,255,255,1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.parsed + '%';
                    }
                }
            }
        }
    }
});

//initializing AOS
AOS.init({
  offset: 120,       // distance in pixels before element comes into view
  duration: 600,     // animation duration in ms
  easing: 'ease-in-sine', // easing function
  delay: 100,        // delay before animation
  reset: true        // animate only once when scrolled into view
});

//menu setting
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

const toogle = () => {
    navbar.classList.toggle('active');
}
menu.addEventListener('click', toogle);
window.onscroll = () => {
    //menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
