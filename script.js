document.addEventListener('DOMContentLoaded', () => {
    const hugButton = document.querySelector('.cute-reaction-button');
    const container = document.querySelector('.container');

    hugButton.addEventListener('click', () => {
        // Stop CSS jiggle animation on click
        hugButton.style.animation = 'none';
        hugButton.style.transform = 'scale(1.05)'; 

        // 1. Alert (Simple Feedback)
        alert("A virtual mega-hug has been successfully sent to [Bestie Ka Naam]! 🤗");

        // 2. Add temporary flying hearts effect
        for (let i = 0; i < 10; i++) {
            createFlyingElement('❤️');
        }

        // Re-enable jiggle after a short while
        setTimeout(() => {
            hugButton.style.animation = 'jiggle 0.5s ease-in-out infinite alternate';
        }, 1000);
    });

    function createFlyingElement(content) {
        const heart = document.createElement('span');
        heart.textContent = content;
        heart.classList.add('flying-element'); 
        
        // Random starting position near the button
        const startX = hugButton.getBoundingClientRect().left + (Math.random() * 50);
        const startY = hugButton.getBoundingClientRect().top - 20;

        heart.style.position = 'absolute';
        heart.style.left = `${startX}px`;
        heart.style.top = `${startY}px`;
        heart.style.zIndex = '10';
        heart.style.fontSize = `${Math.random() * 1.5 + 1}em`;
        
        container.appendChild(heart);
        
        // CSS for the flying animation
        heart.style.transition = 'all 1.5s ease-out';
        
        // Animate the heart to fly upwards and fade out
        requestAnimationFrame(() => {
            heart.style.transform = `translateY(-150px) translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = 0;
        });

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
});