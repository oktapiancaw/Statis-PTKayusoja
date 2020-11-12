var dataReload = document.querySelectorAll("[data-reload]");

const language = {
    ina : {
        navbar : {
            home: "Utama",
            about: 'Tentang',
            team: 'Tim',
            portfolio: 'Portfolio'
        }
    },
    eng : {
        navbar : {
            home: "Home",
            about: 'About',
            team: 'Team',
            portfolio: 'Portfolio'
        }
    }
}
if(window.location.hash){
    if(window.location.hash === "#eng"){
        homeNav.textContent = language.eng.navbar.home;
    }
}
for(i = 0; i < dataReload.length; i++){
    dataReload[i].onclick = function(){
        location.reload(true)
    }
}