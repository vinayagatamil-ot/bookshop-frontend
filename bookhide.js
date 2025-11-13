$(document).ready(function() {
  // Get the book title stored in localStorage
  let selectedBook = localStorage.getItem("selectedBook");

  if (selectedBook) {
    // Hide all books initially
    $("#des .child").hide();

    // Find the one whose title matches
    $("#des .child").each(function() {
      let title = $(this).find("p").first().text().trim();
      if (title === selectedBook) {
        $(this).show();
      }
    });
  } else {
    // If no book stored, show all
    $("#des .child").show();
  }
});