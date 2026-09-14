
        // Navega&ccedil;&atilde;o entre p&aacute;ginas
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                // Remove active de todos
                navLinks.forEach(l => l.classList.remove('active'));
                pages.forEach(p => p.classList.remove('active'));

                // Adiciona active no clicado
                this.classList.add('active');
                const pageId = this.getAttribute('data-page');
                document.getElementById(pageId).classList.add('active');

                // Rola para o topo da p&aacute;gina
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

                // Fecha menu no mobile
                if (window.innerWidth <= 768) {
                    sidebar.classList.add('closed');
                    mainContent.classList.add('expanded');
                    menuToggle.textContent = 'Menu';
                }
            });
        });

        // Menu abre e fecha
        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('mainContent');

        menuToggle.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.toggle('open');
            } else {
                sidebar.classList.toggle('closed');
                mainContent.classList.toggle('expanded');
            }

            if (sidebar.classList.contains('closed') || !sidebar.classList.contains('open')) {
                menuToggle.textContent = 'Menu';
            } else {
                menuToggle.textContent = 'X';
            }
        });

        // Modo escuro
        const darkModeBtn = document.getElementById('darkModeBtn');

        darkModeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');

            if (document.body.classList.contains('dark-mode')) {
                darkModeBtn.textContent = 'Modo Claro';
            } else {
                darkModeBtn.textContent = 'Modo Escuro';
            }
        });