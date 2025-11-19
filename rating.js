$(document).ready(function () {

    $(".rating-box .rating-star").on("mouseenter", function () {
        let val = $(this).data("value");
        let box = $(this).closest(".rating-box");

        box.find(".rating-star").each(function () {
            $(this).toggleClass("hover", $(this).data("value") <= val);
        });
    });

    $(".rating-box .rating-star").on("mouseleave", function () {
        $(this).closest(".rating-box").find(".rating-star").removeClass("hover");
    });

    $(".rating-box .rating-star").on("click", function () {
        let box = $(this).closest(".rating-box");

        let newRating = $(this).data("value");
        let previousAverage = parseFloat(box.data("average"));
        let votes = parseInt(box.data("votes"));

        // Update new average
        let newAvg = ((previousAverage * votes) + newRating) / (votes + 1);

        // Save new values
        box.data("average", newAvg.toFixed(2));
        box.data("votes", votes + 1);

        // Update UI
        box.find(".rating-value").text(newRating + "/5");
        box.find(".avg-value").text(newAvg.toFixed(2));
        box.find(".vote-count").text(votes + 1);

        box.find(".rating-star").each(function () {
            $(this).toggleClass("selected", $(this).data("value") <= newRating);

            $(this).find("i").removeClass("fa-solid fa-regular")
                .addClass($(this).data("value") <= newRating ? "fa-solid" : "fa-regular");
        });
    });

});
