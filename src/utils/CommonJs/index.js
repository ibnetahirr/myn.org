// Sidebar active class js
$(function () {
    let current = location.pathname;
    current = current.substring((current.lastIndexOf('/')) + 1);
    $('.main-nav li a').each(function () {
        var $this = $(this);
        if (current === $this.attr("href").split('/').pop()) {
            if ($this.parent().parent().parent().hasClass("another-level")) {
                $this.parent().parent().parent().parent().closest('li').children().addClass('show').attr("aria-expanded", "true");
            }
            $this.parent().parent().parent().children().addClass('show');
            $this.parent().parent().parent().children().attr("aria-expanded", "true");
            $this.parent('li').addClass('active');
        }
    })
})

// >>-- 10 Hide-show --<<

function myFunction() {
    var x = document.getElementById("myapp");
    if (x.style.display === "none") {
        x.style.display = "block";
        let buttoncontent = $("#button-content").html().replace(/</g, "&lt;").replace(/>/g, "&gt;");
        $("#button-code").html(buttoncontent)
    } else {
        x.style.display = "none";
        $("#button-code").html("")
    }
}

var closeCollaps = document.querySelectorAll('.main-nav li a[data-bs-toggle="collapse"]');
closeCollaps.forEach(function (element) {
    element.addEventListener('click', function () {
        var parent = element.closest('.collapse');
        var all = document.querySelectorAll('.main-nav ul.collapse');
        all.forEach(function (e) {
            if (e !== parent) {
                e.classList.remove('show');
                var ariaexpand = e.previousElementSibling;
                if (ariaexpand) ariaexpand.setAttribute('aria-expanded', 'false');
            }
        });
        parent?.classList.add('show');
        var ariaexpand = element;
        if (ariaexpand) ariaexpand.setAttribute('aria-expanded', 'true');
    });
});