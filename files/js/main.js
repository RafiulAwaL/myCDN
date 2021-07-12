(function($) {
    /*-------------------------------------
<<<<<<< HEAD
	Demo custom JavaScript
=======
	Demo custom JavaScripts
>>>>>>> 37bf6b25664f328d9fc2ffb2dcd05de621d9d6b1
	-------------------------------------*/
    $("[data-bg-image]").each(function() {
        const img = $(this).data("bg-image");
        $(this).css({
            backgroundImage: `url(${img})`,
        });
    });

    /*-------------------------------------
      
      -------------------------------------*/
    window.onload = addNewClass();

    function addNewClass() {
        $(".fxt-template-animation")
            .imagesLoaded()
            .done((instance) => {
                $(".fxt-template-animation").addClass("loaded");
            });
    }
})(jQuery);
