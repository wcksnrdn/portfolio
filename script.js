AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    const roles = ["Web Developer", "Software Engineer", "Freelancer", "Designer"];
    let currentIndex = 0;
    const swipeTextElement = document.getElementById('swipe-text');

    function updateText() {
        swipeTextElement.classList.remove('visible');
        setTimeout(() => {
            swipeTextElement.textContent = roles[currentIndex];
            swipeTextElement.classList.add('visible');
            currentIndex = (currentIndex + 1) % roles.length;
        }, 1000); // Time to switch text
    }

    setInterval(updateText, 4000); // Interval between text changes
    updateText(); // Initial call to set the first text
});

const photo = document.querySelector('.profile-photo');

photo.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = photo.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const angleX = (deltaY / centerY) * 10; // Adjust sensitivity
    const angleY = (deltaX / centerX) * -10; // Adjust sensitivity

    photo.querySelector('img').style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
});

photo.addEventListener('mouseleave', () => {
    photo.querySelector('img').style.transform = 'rotateX(0) rotateY(0) scale(1)';
});
