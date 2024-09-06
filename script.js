

AOS.init()

function disableAOSForMobile() {
    const minScreenWidth = 300;
    const maxScreenWidth = 500;
    const currentScreenWidth = window.innerWidth;

    if (currentScreenWidth >= minScreenWidth && currentScreenWidth <= maxScreenWidth) {
        // Nonaktifkan AOS
        AOS.init({
            disable: true
        });
    } else {
        // Aktifkan AOS
        AOS.init({
            disable: false
        });
    }
}

// Jalankan fungsi saat halaman dimuat
window.addEventListener('load', disableAOSForMobile);

// Jalankan fungsi saat ukuran layar diubah
window.addEventListener('resize', disableAOSForMobile);


document.addEventListener('DOMContentLoaded', function() {
    const roles = ["Web Developer", "Web Designer", "Frontend Dev", "UI/UX Designer"];
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

    photo.querySelector('img').style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1)`;
    photo.classList.add('hover')
});

photo.addEventListener('mouseleave', () => {
    photo.querySelector('img').style.transform = 'rotateX(0) rotateY(0) scale(1)';
    photo.classList.remove('hover')
});

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    const bars = document.querySelectorAll('.bar');
    const stars = document.querySelectorAll('.star');
    bars.forEach(bar => {
        bar.classList.toggle('hidden');
    });
    stars.forEach(star => {
        star.classList.toggle('blue-neon');
    });
    
    const buttonContainer = document.querySelector('.button-container.right');
    if (buttonContainer.style.right === '-20px') {
        buttonContainer.style.right = '-200px';
    } else {
        buttonContainer.style.right = '-20px';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const aboutH2 = document.querySelector('#about h2');

    function handleScroll() {
        const aboutPosition = aboutH2.getBoundingClientRect();
        const screenHeight = window.innerHeight;

        if (aboutPosition.top >= 0 && aboutPosition.bottom <= screenHeight) {
            aboutH2.classList.add('underline');
        } else {
            aboutH2.classList.remove('underline');
        }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);  // Optional, in case of window resizing
});
