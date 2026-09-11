/* =========================================================
   FARHAN DESRI YANTO
   CINEMATIC PORTFOLIO INTERACTION
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.querySelector(".nav-menu");


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle("open");

        }
    );

}


document.querySelectorAll(".nav-link")
.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navMenu.classList.remove("open");

        }
    );

});


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 60) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }
);


/* =========================================================
   CINEMATIC SCROLL LIGHT
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        const scroll =
            window.scrollY;

        const glow =
            Math.min(
                scroll / 1200,
                1
            );

        document.documentElement.style
            .setProperty(
                "--scrollGlow",
                glow
            );

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".course-card, .artifact-card, .future-card, .profile-content"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList
                            .add("reveal");

                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   CARD MOUSE GLOW
========================================================= */

const cards =
    document.querySelectorAll(
        ".course-card, .artifact-card, .future-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;


            card.style.background =
                `radial-gradient(
                    circle at ${x}px ${y}px,
                    rgba(111,92,255,.09),
                    transparent 35%
                )`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.background =
                "";

        }
    );

});


/* =========================================================
   LEARNING ARCHIVE
========================================================= */

const archiveModal =
    document.getElementById("archiveModal");

const archiveTrigger =
    document.querySelector(".archive-trigger");

const archiveCloseButtons =
    document.querySelectorAll("[data-close-archive]");


const closeArchive = () => {

    archiveModal.hidden = true;
    document.body.style.overflow = "";

};


if (archiveModal && archiveTrigger) {

    archiveTrigger.addEventListener(
        "click",
        () => {

            archiveModal.hidden = false;
            document.body.style.overflow = "hidden";

        }
    );

    archiveCloseButtons.forEach(button => {

        button.addEventListener(
            "click",
            closeArchive
        );

    });

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape" && !archiveModal.hidden) {

                closeArchive();

            }

        }
    );

}


/* =========================================================
   SMOOTH HERO PARALLAX
========================================================= */

const hero =
    document.querySelector(".hero");

const filmFrames =
    document.querySelectorAll(".film-frame");


window.addEventListener(
    "scroll",
    () => {

        if (!hero) return;

        const scroll =
            window.scrollY;

        filmFrames.forEach(
            (frame, index) => {

                const speed =
                    index === 0
                    ? 0.08
                    : -0.05;

                frame.style.transform =
                    `translateY(
                        ${scroll * speed}px
                    ) rotate(
                        ${index === 0 ? -8 : 7}deg
                    )`;

            }
        );

    }
);


/* =========================================================
   HERO MOUSE MOVEMENT
========================================================= */

document.addEventListener(
    "mousemove",
    event => {

        const x =
            (event.clientX /
            window.innerWidth -
            0.5) * 2;

        const y =
            (event.clientY /
            window.innerHeight -
            0.5) * 2;


        filmFrames.forEach(
            (frame, index) => {

                const intensity =
                    index === 0
                    ? 10
                    : -7;

                frame.style.marginLeft =
                    `${x * intensity}px`;

                frame.style.marginTop =
                    `${y * intensity}px`;

            }
        );

    }
);


