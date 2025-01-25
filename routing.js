// filepath: /c:/Users/bokar/Desktop/aim/new-Aim400KG/app.js
document.addEventListener('DOMContentLoaded', () => {
    function navigateTo(route) {
        window.location.hash = route;
    }

    function handleHashChange() {
        let route = window.location.hash.substring(1);
        if (!route) {
            route = 'games';
            window.location.hash = route;
        }
        const routes = document.querySelectorAll('.route');
        routes.forEach(r => r.style.display = 'none');
        const activeRoute = document.getElementById(route);
        if (activeRoute) {
            activeRoute.style.display = 'block';
        }
    }

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Call once to handle the initial load

    // Expose navigateTo function to global scope
    window.navigateTo = navigateTo;
});
