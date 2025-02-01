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
        } else {
            // Если текущий маршрут не найден, ищем вложенный маршрут
        const parentRoute = route.split('/')[0];
        const childRoute = route.slice(parentRoute.length + 1);

        let div = document.getElementById(childRoute);
        div.style.display = 'block'
    }}

    // document.querySelector('#back-button').addEventListener('click', function() {
    //     if (window.history.length > 1) {
    //         window.history.go(-1);
    //     }
    //   });

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); 

    window.navigateTo = navigateTo;
});
