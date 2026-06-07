const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggleBtn.textContent = 'Tema Escuro';
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = 'Tema Escuro';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = 'Tema Claro';
    }
});

const logoElement = document.querySelector('.logo');

if (logoElement) {
    const textToType = "<felipe_assis/>";
    logoElement.textContent = "";
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < textToType.length) {
            logoElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 80); // Velocidade da digitação
        } else {

            setTimeout(() => {
                logoElement.classList.add('stop-blink');
            }, 950);
        }
    }


    setTimeout(typeWriter, 300); 
}