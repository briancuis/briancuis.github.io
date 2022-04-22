const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
  };

  const routes = {
    404: "/pages/404.html",
    "/": "/pages/home.html",
    "/elcuis": "/pages/elcuis.html",
    "/elogro": "/pages/elogro.html",
    "/lauty": "/pages/lauty.html",
  };
  
  const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
  };
  
  window.onpopstate = handleLocation;
  window.route = route;
  
  handleLocation();