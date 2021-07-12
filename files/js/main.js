(function($) {
    /*-------------------------------------
	Demo custom JavaScript
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