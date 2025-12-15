(function() {
  'use strict';

  const quotes = [
    "Code is poetry written in logic.",
    "First, solve the problem. Then, write the code.",
    "Simplicity is the soul of efficiency.",
    "Make it work, make it right, make it fast.",
    "The best code is no code at all.",
    "Programs must be written for people to read.",
    "Talk is cheap. Show me the code.",
    "Any fool can write code that a computer can understand.",
    "Clean code always looks like it was written by someone who cares.",
    "Debugging is twice as hard as writing the code."
  ];

  function initHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
      lastScroll = currentScroll;
    });

    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileOverlay = document.querySelector('.mobile-overlay');

    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
      });

      if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function() {
          mobileMenu.classList.remove('active');
          mobileOverlay.classList.remove('active');
          mobileToggle.classList.remove('active');
          document.body.style.overflow = '';
        });
      }
    }

    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchInput = document.querySelector('.search-input');
    const searchClose = document.querySelector('.search-close');

    if (searchToggle && searchOverlay) {
      searchToggle.addEventListener('click', function() {
        searchOverlay.classList.add('active');
        if (searchInput) searchInput.focus();
      });

      if (searchClose) {
        searchClose.addEventListener('click', function() {
          searchOverlay.classList.remove('active');
        });
      }

      searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
          searchOverlay.classList.remove('active');
        }
      });
    }

    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (searchOverlay) {
          searchOverlay.classList.add('active');
          if (searchInput) searchInput.focus();
        }
      }
      if (e.key === 'Escape' && searchOverlay) {
        searchOverlay.classList.remove('active');
      }
    });

    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
      document.body.setAttribute('data-theme', savedTheme);
      updateThemeIcon(savedTheme);

      themeToggle.addEventListener('click', function() {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        document.body.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
      });
    }

    function updateThemeIcon(theme) {
      const icon = document.querySelector('.theme-toggle .theme-icon');
      if (icon) {
        icon.textContent = theme === 'dark' ? '☀' : '☾';
      }
    }

    const quoteEl = document.querySelector('.header-quote');
    if (quoteEl) {
      let quoteIndex = Math.floor(Math.random() * quotes.length);
      quoteEl.textContent = quotes[quoteIndex];
      
      setInterval(function() {
        quoteEl.style.opacity = '0';
        setTimeout(function() {
          quoteIndex = (quoteIndex + 1) % quotes.length;
          quoteEl.textContent = quotes[quoteIndex];
          quoteEl.style.opacity = '1';
        }, 500);
      }, 8000);
    }

    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(function(dropdown) {
      const toggle = dropdown.querySelector('.dropdown-toggle');
      const menu = dropdown.querySelector('.dropdown-menu');
      
      if (toggle && menu) {
        toggle.addEventListener('click', function(e) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
          if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
          }
        });
      }
    });

    updateOnlineStatus();
    updateHeaderTime();
    setInterval(updateHeaderTime, 1000);
  }

  function updateHeaderTime() {
    const timeEl = document.getElementById('header-time');
    if (timeEl) {
      const now = new Date();
      const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      timeEl.textContent = now.toLocaleDateString('en-US', options);
    }
  }

  function updateOnlineStatus() {
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.status-text');
    if (statusDot && statusText) {
      const now = new Date();
      const hours = now.getHours();
      const isOnline = hours >= 9 && hours < 22;
      statusDot.className = 'status-dot ' + (isOnline ? 'online' : 'away');
      statusText.textContent = isOnline ? 'Online' : 'Away';
    }
  }

  function waitForHeader() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      initHeader();
    } else {
      setTimeout(waitForHeader, 100);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForHeader);
  } else {
    waitForHeader();
  }
})();
