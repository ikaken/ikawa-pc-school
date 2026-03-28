document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const overlay = document.querySelector('.overlay');
    const navLinks = document.querySelectorAll('.nav a, .cta-button');
    
    function openMenu() {
        hamburger.classList.add('active');
        nav.classList.add('active');
        overlay.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.setAttribute('aria-label', 'メニューを閉じる');
    }
    
    function closeMenu() {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'メニューを開く');
    }
    
    // ハンバーガーメニューの開閉
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const isOpen = nav.classList.contains('active');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }
    
    // オーバーレイクリックでメニューを閉じる
    if (overlay) {
        overlay.addEventListener('click', function() {
            closeMenu();
        });
    }
    
    // スムーススクロール
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // モバイルメニューを閉じる
                    if (hamburger) {
                        closeMenu();
                    }
                }
            }
        });
    });
});
