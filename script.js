$(documnt).ready(function(){
    // jquery for expand and collaps the sidbar 

    $('.menu-btn').click(function(){
        $('.side-bar').addClass('active');
        $('.mnu-btn').css("visibility", "hidden");
    });
    // for close button
    $('.clos-btn').click(function(){
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "visible");
    });

    // jquery for toggle sub menu
    $('.sub-btn').click(function(){
        $(this).next('sub-menu').slideToggle();
        $('this').find('.dropdown').toggleClass('rotate');
    });
})


// **** main content ****///
const txtAnim = document.querySelector('h1');

new typewriter(txtAnim, {
    deleteSpeed: 20
})    
.typeString('Exigez le meilleur pour votre maison')
pauseFor(300)
deleteChars(13)
.typeString('Exigez le meilleur pour vos meubles')
pauseFor(300)
deleteChars(13)
typeString('Des pros en un clic pour tous vos besoins')
deleteChars(13)
.start()

// ******loading page *****//

