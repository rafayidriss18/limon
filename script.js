function toggleMenu() {

  const menu = document.getElementById("mobileMenu");

  if (menu.style.display === "block") {

    menu.style.display = "none";

  } else {

    menu.style.display = "block";

  }

}


function openSearch() {

  const box = document.getElementById("searchBox");

  box.style.display = "flex";

  document.getElementById("searchInput").focus();

}


function closeSearch() {

  document.getElementById("searchBox").style.display = "none";

}


function openCart() {

  const toast = document.getElementById("toast");

  toast.classList.add("show");

  setTimeout(function () {

    toast.classList.remove("show");

  }, 2500);

}


document.querySelectorAll('a[href^="#"]').forEach(function(link) {

  link.addEventListener("click", function(event) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});
