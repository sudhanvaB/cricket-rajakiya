function emojiVomit(
    emojis = ["🌈", "🔥", "🎉", "🎊", "🌟"],
    emojiSize = 60,
    confettiNumber = 50
) {
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
        emojis: emojis,
        emojiSize: emojiSize,
        confettiNumber: confettiNumber,
    });
    return;
}

function handleHeroSubmit() {
    emailSubmit(document.getElementById("heroEmailInput").value);
}

function handleReminderSubmit() {
    emailSubmit(document.getElementById("reminderEmailInput").value);
}

function emailSubmit(email) {
    let div;
    // simple email validation
    email_valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (email.length > 0 && email_valid) {
        document.getElementById("noEmailToast").style.display = "none";
        div = document.getElementById("thankYouToast");
        emojiVomit();
        fetch("/", {
            method: "POST",
            body: JSON.stringify({Email: email}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => console.log("Success!"));
    } else {
        div = document.getElementById("noEmailToast");
    }
    // Show the div
    div.style.display = "flex";
    // Hide the div after 5 seconds
    setTimeout(function () {
        div.style.display = "none";
    }, 3000);

}

// jquery

$(document).ready(function () {
    // opacity animation for value props header
    $(window).scroll(function () {
        $(".valuePropHeader").each(function () {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if (
                bottom_of_screen > top_of_element &&
                top_of_screen < bottom_of_element
            ) {
                $(this).addClass("show-on-scroll");
            }
        });
    });
    // opacity animation for value props cards
    $(window).scroll(function () {
        $(".vpCards").each(function () {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if (
                bottom_of_screen > top_of_element &&
                top_of_screen < bottom_of_element
            ) {
                $(this).addClass("show-on-scroll");
            }
        });
    });
    // opacity animation for steps header
    $(window).scroll(function () {
        $(".stepsHeader").each(function () {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if (
                bottom_of_screen > top_of_element &&
                top_of_screen < bottom_of_element
            ) {
                $(this).addClass("show-on-scroll");
            }
        });
    });
    // opacity animation for steps cards
    $(window).scroll(function () {
        $(".sCards").each(function () {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if (
                bottom_of_screen > top_of_element &&
                top_of_screen < bottom_of_element
            ) {
                $(this).addClass("show-on-scroll");
            }
        });
    });
    // opacity animation for reminder
    $(window).scroll(function () {
        $(".reminder").each(function () {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if (
                bottom_of_screen > top_of_element &&
                top_of_screen < bottom_of_element
            ) {
                $(this).addClass("show-on-scroll");
            }
        });
    });
});
