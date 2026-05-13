particlesJS('particles-js', {
    "particles": {
        "number": { "value": 130, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": ["#ffffff", "#00f2fe", "#ff00cc", "#f7df1e", "#92fe9d"] },
        "shape": { "type": "star" },
        "opacity": { "value": 0.7, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1 } },
        "size": { "value": 3.5, "random": true, "anim": { "enable": true, "speed": 4, "size_min": 0.1 } },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "bubble" },
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": {
            "bubble": { "distance": 180, "size": 12, "duration": 0.3, "opacity": 1 },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});

function flipCard() { document.getElementById('cardInner').classList.toggle('is-flipped'); }

function switchTab(tabId, btn) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
}

function copySTK() {
    navigator.clipboard.writeText("5704205429140").then(() => {
        const toast = document.getElementById('copy-toast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    });
}

function switchTab(tabId, btn) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
}
