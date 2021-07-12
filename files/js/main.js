(function($) {
    /*-------------------------------------
	Demo custom JavaScripts
	-------------------------------------*/
    $("[data-bg-image]").each(function() {
        const img = $(this).data("bg-image");
        $(this).css({
            backgroundImage: `url(${img})`,
        });
    });

    /*-------------------------------------
      After Load All Content Add a Class
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
