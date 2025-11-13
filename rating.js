 
        $(document).ready(function () {
            let selectedRating = 0;

            $(".rating-star").on("mouseenter", function () {
                let value = $(this).data("value");
                $(".rating-star").each(function () {
                    $(this).toggleClass("hover", $(this).data("value") <= value);
                });
            });

            $(".rating-star").on("mouseleave", function () {
                $(".rating-star").removeClass("hover");
            });

            $(".rating-star").on("click", function () {
                selectedRating = $(this).data("value");
                $("#rating-value").text(selectedRating + "/5");

                $(".rating-star").each(function () {
                    $(this).toggleClass("selected", $(this).data("value") <= selectedRating);
                    $(this).find("i").removeClass("fa-solid fa-regular").addClass(
                        $(this).data("value") <= selectedRating ? "fa-solid" : "fa-regular"
                    );
                });
            });
        });
        let previousAverage = 4.2; // Example: fetched from DB or backend
        let totalVotes = 10;

        function updateAverage(newRating) {
            totalVotes += 1;
            previousAverage = ((previousAverage * (totalVotes - 1)) + newRating) / totalVotes;
            previousAverage = previousAverage.toFixed(2); // Optional: round to 2 decimals
            $("#updated-average").text("New Average: " + previousAverage + "/5 from " + totalVotes + " votes");
        }

        $(".rating-star").on("click", function () {
            const selectedRating = $(this).data("value");
            $("#rating-value").text(selectedRating + "/5");

            $(".rating-star").each(function () {
                const starValue = $(this).data("value");
                $(this).toggleClass("selected", starValue <= selectedRating);
                $(this).find("i").removeClass("fa-solid fa-regular").addClass(
                    starValue <= selectedRating ? "fa-solid" : "fa-regular"
                );
            });

            // ✅ Update the average after click
            updateAverage(selectedRating);
        });


    
    
        $(".rating-star").hover(
            function () {
                const hoverVal = $(this).data("value");
                $(".rating-star").each(function () {
                    const starVal = $(this).data("value");
                    $(this).find("i").css("color", starVal <= hoverVal ? "#FFC300" : "#ccc");
                });
            },
            function () {
                $(".rating-star").each(function () {
                    const starVal = $(this).data("value");
                    $(this).find("i").css("color", $(this).hasClass("selected") ? "#FFD700" : "#ccc");
                });
            }
        );

    