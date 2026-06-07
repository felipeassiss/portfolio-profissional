/* =========================================
   1. SISTEMA DE TRADUÇÃO (EN / PT)
   ========================================= */
const langToggleBtn = document.getElementById('lang-toggle');
const elementsToTranslate = document.querySelectorAll('[data-pt]');
let currentLang = localStorage.getItem('lang') || 'en';

function updateText(lang) {
    elementsToTranslate.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
    
    if (lang === 'pt') {
        langToggleBtn.innerHTML = "<span style='opacity: 0.5'>EN</span> / <strong>PT</strong>";
    } else {
        langToggleBtn.innerHTML = "<strong>EN</strong> / <span style='opacity: 0.5'>PT</span>";
    }
}

function applyLanguage(lang, animate = false) {
    if (animate) {
        elementsToTranslate.forEach(el => el.classList.add('lang-changing'));
        
        setTimeout(() => {
            updateText(lang);
            elementsToTranslate.forEach(el => el.classList.remove('lang-changing'));
        }, 250);
    } else {
        updateText(lang);
    }
}

applyLanguage(currentLang, false);

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'pt' : 'en';
        localStorage.setItem('lang', currentLang);
        applyLanguage(currentLang, true);
    });
}

/* =========================================
   2. EFEITO DE DIGITAÇÃO (MÁQUINA DE ESCREVER)
   ========================================= */
const felipeEl = document.getElementById('type-felipe');
const assisEl = document.getElementById('type-assis');

const word1 = "FELIPE";
const word2 = "ASSIS";

let i = 0;
let j = 0;
const typingSpeed = 90; 

const cursor = document.createElement('span');
cursor.classList.add('cursor');

function typeFelipe() {
    if (i === 0) felipeEl.appendChild(cursor);

    if (i < word1.length) {
        felipeEl.insertBefore(document.createTextNode(word1.charAt(i)), cursor);
        i++;
        setTimeout(typeFelipe, typingSpeed);
    } else {
        setTimeout(() => {
            assisEl.appendChild(cursor);
            typeAssis();
        }, 150); 
    }
}

function typeAssis() {
    if (j < word2.length) {
        assisEl.insertBefore(document.createTextNode(word2.charAt(j)), cursor);
        j++;
        setTimeout(typeAssis, typingSpeed);
    } else {
        setTimeout(() => {
            cursor.remove(); 
            document.body.classList.add('animation-done');
        }, 250);
    }
}

window.onload = () => {
    setTimeout(typeFelipe, 200);
};

/* =========================================
   3. INTERAÇÃO DO CLIQUE NO NOME
   ========================================= */
const interactiveTitle = document.getElementById('interactive-title');

if (interactiveTitle) {
    interactiveTitle.addEventListener('click', () => {
        if (document.body.classList.contains('animation-done')) {
            interactiveTitle.classList.toggle('is-active');
        }
    });
}