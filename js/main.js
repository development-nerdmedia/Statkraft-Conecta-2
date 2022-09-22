AOS.init();
VanillaTilt.init(document.querySelector('header .header-stk__img-front'), {
    max: 15,
    speed: 2000,
    reverse: false,
    "mouse-event-element": "header",
});

VanillaTilt.init(document.querySelectorAll('.tarjeta-testimonio.testimonio1 .persona'), {
    max: 15,
    speed: 2000,
    reverse: true,
    "mouse-event-element": ".tarjeta-testimonio.testimonio1",
});

VanillaTilt.init(document.querySelectorAll('.tarjeta-testimonio.testimonio2 .persona'), {
    max: 15,
    speed: 2000,
    reverse: true,
    "mouse-event-element": ".tarjeta-testimonio.testimonio2",
});

VanillaTilt.init(document.querySelectorAll('.tarjeta-testimonio.testimonio3 .persona'), {
    max: 15,
    speed: 2000,
    reverse: true,
    "mouse-event-element": ".tarjeta-testimonio.testimonio3",
});


$(".card1").hover(function () {
    $(".card1 .person-img").css("display", "none");
    $(".card1 .person-img-hover").css("display", "block");
    document.querySelector(".card1 .person-img-hover").setAttribute("autoplay", "true");
    $('.card1 .person-img-hover').load();
}, function () {
    $(".card1 .person-img").css("display", "block");
    $(".card1 .person-img-hover").css("display", "none");
});
$(".card2").hover(function () {
    $(".card2 .person-img").css("display", "none");
    $(".card2 .person-img-hover").css("display", "block");
    document.querySelector(".card2 .person-img-hover").setAttribute("autoplay", "true");
    $('.card2 .person-img-hover').load();
}, function () {
    $(".card2 .person-img").css("display", "block");
    $(".card2 .person-img-hover").css("display", "none");
});
$(".card3").hover(function () {
    $(".card3 .person-img").css("display", "none");
    $(".card3 .person-img-hover").css("display", "block");
    document.querySelector(".card3 .person-img-hover").setAttribute("autoplay", "true");
    $('.card3 .person-img-hover').load();
}, function () {
    $(".card3 .person-img").css("display", "block");
    $(".card3 .person-img-hover").css("display", "none");
});
$(".card4").hover(function () {
    $(".card4 .person-img").css("display", "none");
    $(".card4 .person-img-hover").css("display", "block");
    document.querySelector(".card4 .person-img-hover").setAttribute("autoplay", "true");
    $('.card4 .person-img-hover').load();
}, function () {
    $(".card4 .person-img").css("display", "block");
    $(".card4 .person-img-hover").css("display", "none");
});
$(".card5").hover(function () {
    $(".card5 .person-img").css("display", "none");
    $(".card5 .person-img-hover").css("display", "block");
    document.querySelector(".card5 .person-img-hover").setAttribute("autoplay", "true");
    $('.card5 .person-img-hover').load();
}, function () {
    $(".card5 .person-img").css("display", "block");
    $(".card5 .person-img-hover").css("display", "none");
});
$(".card6").hover(function () {
    $(".card6 .person-img").css("display", "none");
    $(".card6 .person-img-hover").css("display", "block");
    document.querySelector(".card6 .person-img-hover").setAttribute("autoplay", "true");
    $('.card6 .person-img-hover').load();
}, function () {
    $(".card6 .person-img").css("display", "block");
    $(".card6 .person-img-hover").css("display", "none");
});

var mediaqueryList4 = window.matchMedia("(max-height: 1025px)");
var mediaqueryList10 = window.matchMedia("(min-height: 1020px)");
var mediaqueryList7 = window.matchMedia("(max-width: 500px)");
var mediaqueryList5 = window.matchMedia("(max-width: 1200px)");

if (mediaqueryList10.matches ) {
    if ($('.scroll-wrapper').length > 0) {
        $(".scroll-wrapper").stick_in_parent({
            offset_top: 130
        });
    }
} 

if (mediaqueryList4.matches & mediaqueryList5.matches) {
    if ($('.scroll-wrapper').length > 0) {
        $(".scroll-wrapper").stick_in_parent({
            offset_top: 50
        });
    }
} else {
    if ($('.scroll-wrapper').length > 0) {
        $(".scroll-wrapper").stick_in_parent({
            offset_top: 0
        });
    }
}


var content2 = document.querySelectorAll(".content-cards");

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.miradas',
        start: '3% top',
        end: '100% 100%',
        scrub: 1,
    },
});

tl.to(content2, { translateX: -1900, duration: 500, ease: "none" })

var mediaqueryList = window.matchMedia("(max-width: 1024px)");
if (mediaqueryList.matches) {
    var content2 = document.querySelectorAll(".content-cards");

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.miradas',
            start: '3% top',
            end: '100% 100%',
            scrub: 1,
        },
    });

    tl.to(content2, { translateX: -1900, duration: 500, ease: "none" }) /* -1700 */
}

var mediaqueryList6 = window.matchMedia("(max-width: 814px)");
if (mediaqueryList6.matches) {
    var content2 = document.querySelectorAll(".content-cards");

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.miradas',
            start: '3% top',
            end: '100% 100%',
            scrub: 1,
        },
    });

    tl.to(content2, { translateX: -1700, duration: 500, ease: "none" }) /* -1700 */
}

var mediaqueryList2 = window.matchMedia("(max-width: 665px)");
if (mediaqueryList2.matches) {
    var content2 = document.querySelectorAll(".content-cards");
    if ($('.scroll-wrapper').length > 0) {
        $(".scroll-wrapper").stick_in_parent({
            offset_top: 35
        });
    }

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.miradas',
            start: '3% top',
            end: '100% 100%',
            scrub: 1,
        },
    });

    tl.to(content2, { translateX: -2050, duration: 500, ease: "none" })
}

var mediaqueryList3 = window.matchMedia("(max-width: 397px)");
if (mediaqueryList3.matches) {
    var content3 = document.querySelectorAll(".content-cards");

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.miradas',
            start: '3% top',
            end: '100% 100%',
            scrub: 1,
        },
    });

    tl.to(content3, { translateX: -1720, duration: 500, ease: "none" })
}

if (mediaqueryList7.matches & mediaqueryList4.matches) {
    if ($('.scroll-wrapper').length > 0) {
        $(".scroll-wrapper").stick_in_parent({
            offset_top: 30
        });
    }
}

var content3 = document.querySelectorAll(".video1 .videohome");

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-decision',
        start: '-15% top',
        end: 'top top',
        scrub: 1,
    },
});

tl.to(content3, { scale: 1, duration: 500, ease: "none" })


$('.marquee-with-options').marquee({
    speed: 15000,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    pauseOnHover: false
});

$('.main-carousel').flickity({
    cellSelector: ".carousel-cell",
    pauseAutoPlayOnHover: false,
    cellAlign: "center",
    prevNextButtons: !1,
    pageDots: !1,
    draggable: !0,
    wrapAround: !0,
    autoPlay: 3000,
    imagesLoaded: !0,
    percentPosition: !1,
    pageDots: true,
    arrowShape: { x0: 10, x1: 50, y1: 40, x2: 55, y2: 35, x3: 20 }
});



function mostratVideo(e) {
    var nameURL = e.target.parentElement.parentElement.querySelector(".urlvieo p").textContent;
    Swal.fire({
        showCloseButton: true,
        html:
            '<div class="video1-modal-content">' +
            '<div class="video1-modal-content__mask">' +
            '<div class="video1-modal-content__video-wrapper">' +
            '<div style="padding:56.25% 0 0 0;position:relative;">' +
            `<iframe src="${nameURL}" title="YouTube video player" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>` +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
    })
}

function mostratVideo2(e) {
    var nameURL = e.target.querySelector(".urlvieo p").textContent;
    Swal.fire({
        showCloseButton: true,
        html:
            '<div class="video1-modal-content">' +
            '<div class="video1-modal-content__mask">' +
            '<div class="video1-modal-content__video-wrapper">' +
            '<div style="padding:56.25% 0 0 0;position:relative;">' +
            `<iframe src="${nameURL}" title="YouTube video player" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>` +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
    })
}

document.addEventListener("click", function (e) {
    if (e.target.closest(".video1 .videohome")) {
        Swal.fire({
            showCloseButton: true,
            html:
                '<div class="video1-modal-content">' +
                '<div class="video1-modal-content__mask">' +
                '<div class="video1-modal-content__video-wrapper">' +
                '<div style="padding:56.25% 0 0 0;position:relative;">' +
                '<iframe src="https://www.youtube.com/embed/o9AG5PskrLU" title="YouTube video player" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'
        })
    }

    if (e.target.closest(".miradas .card .person")) {
        mostratVideo(e)
    }
    if (e.target.closest(".main-carousel .carousel-cell .img .play")) {
        mostratVideo(e)
    }
    if (e.target.closest(".testimonios .tarjeta-testimonio")) {
        mostratVideo2(e)
    }

    if (e.target.closest(".btnTest")) {
        document.getElementById('test').classList.add('mostrar');
        document.getElementById('test').classList.remove('ocultar');
        document.getElementById('home').classList.add('ocultar');
        document.getElementById('home').classList.remove('mostrar');
        document.getElementById('footer-stk').classList.remove('mostrar');
        document.getElementById('footer-stk').classList.add('ocultar');
        setTimeout(function(){                                    
            document.querySelector(".test .portada .container_test").classList.add('active');
        }, 5);
    }

    if (e.target.closest(".regresar")) {
        document.getElementById('test').classList.add('ocultar');
        document.getElementById('test').classList.remove('mostrar');
        document.getElementById('home').classList.add('mostrar');
        document.getElementById('home').classList.remove('ocultar');
        document.getElementById('footer-stk').classList.add('mostrar');
        document.getElementById('footer-stk').classList.remove('ocultar');
        setTimeout(function(){                                    
            document.querySelector(".test .portada .container_test").classList.remove('active');
        }, 5);
    }

    if (e.target.closest(".comenzar")) {
        document.getElementById('portada').classList.add('ocultar');
        document.getElementById('portada').classList.remove('mostrar');
        document.getElementById('preguntas').classList.add('mostrar');
        document.getElementById('preguntas').classList.remove('ocultar');
    }
    if (e.target.closest(".guia")) {
        document.getElementById('preguntas').classList.add('ocultar');
        document.getElementById('preguntas').classList.remove('mostrar');
        document.getElementById('portada').classList.remove('ocultar');
        document.getElementById('portada').classList.add('mostrar');
    }
    if (e.target.closest(".btn-finish.activo")) {
        document.getElementById('preguntas').classList.add('ocultar');
        document.getElementById('preguntas').classList.remove('mostrar');
        document.getElementById('portada').classList.remove('ocultar');
        document.getElementById('portada').classList.add('mostrar');
        document.getElementById('test').classList.add('ocultar');
        document.getElementById('test').classList.remove('mostrar');
        document.getElementById('finalizado').classList.add('mostrar');
        document.getElementById('finalizado').classList.remove('ocultar');
        document.getElementById('finalizado-contact').classList.add('mostrar');
        document.getElementById('finalizado-contact').classList.remove('ocultar');
        setTimeout(function(){                                    
            document.querySelector("#finalizado-contact .container_test").classList.add('active');
        }, 5);
    }
    if (e.target.closest(".ir-inicio")) {
        document.getElementById('gracias').classList.remove('mostrar');
        document.getElementById('gracias').classList.add('ocultar');
        document.getElementById('home').classList.add('mostrar');
        document.getElementById('home').classList.remove('ocultar');
        document.getElementById('footer-stk').classList.add('mostrar');
        document.getElementById('footer-stk').classList.remove('ocultar');
        setTimeout(function(){                                    
            document.querySelector("#finalizado-contact .container_test").classList.remove('active');
        }, 5);
    }
})

const enlaces = document.querySelectorAll('.pregunta .content-opciones .opcion');                
var puntos = 0;

MyApp = {
    initQuiz: {
        init: function () {
            var activeClass = "active-question";
            const URLactual = window.location;
            $('.finalizado-gracias a').attr("href", URLactual);
            $('.finalizado .finalizado-contact a.btnback').attr("href", URLactual);
            jQuery(".preguntas").each(function () {
                var container = jQuery(this);
                var progressBar = container.find(".progress-bar .completed");
                var questions = container.find(".container_test .pregunta");
                var currentIndex = 0;
                var hiddenClass = "js-hidden";
                var btnNext = container.find(".btn-siguiente");
                var btnBack = container.find(".btn-anterior");
                var btnFinish = container.find(".btn-finish");
                var btnoption = container.find(".container_test .pregunta .opcion");
                
                document.addEventListener("click", function (e) {
                    if (e.target.closest(".btn.comenzar")) {                
                        setTimeout(function(){                                    
                            questions.eq(currentIndex).addClass(activeClass);
                        }, 5);
                    }
                })
                progressBar.css({ width: 0 });

                btnoption.on("click", function (e) {
                    btnNext.removeClass('stop');
                })

                btnNext.on("click", function (e) {   
                    if (!btnNext.hasClass("stop")) {
                        questions.eq(currentIndex).removeClass(activeClass);
                        currentIndex++;                        
                        changeQuestion();
                        document.getElementById('mensajeError').classList.remove('activemensaje');                                         
                        if (questions.eq(currentIndex).hasClass("marcado")) {
                            btnNext.removeClass('stop');
                        }
                    }else{
                        document.getElementById('mensajeError').classList.add('activemensaje');
                        setTimeout(function(){                                    
                            document.getElementById('mensajeError').classList.remove('activemensaje');
                        }, 3000);
                    }
                })


                btnBack.on("click", function (e) {
                    questions.eq(currentIndex).removeClass(activeClass);
                    currentIndex--;
                    changeQuestion();
                    btnNext.removeClass('stop');
                    btnBack.css('display', 'block');
                    btnNext.css('display', 'block');
                    btnFinish.css('display', 'none');
                    if (currentIndex === 0) {
                        btnBack.css('display', 'none');
                    }
                })

                function changeQuestion() {
                    questions.eq(currentIndex).addClass(activeClass);
                    questions.eq(currentIndex - 1).addClass("leido");
                    if (currentIndex > 0) {
                        btnBack.css('display', 'block');
                    } else {
                        btnBack.css('display', 'none');
                    }
                    btnNext.addClass('stop');                    
                    document.getElementById('mensajeError').classList.remove('activemensaje');
                    if (questions.eq(currentIndex).hasClass("leido")) {
                        btnNext.removeClass("stop");
                    }

                    if (currentIndex === (questions.length - 1)) {
                        btnBack.css('display', 'block');
                        btnNext.css('display', 'none');
                        btnFinish.css('display', 'block');
                    }
                }


                questions.each(function (i) {
                    var question = jQuery(this);
                    var radioBtns = question.find("input[type=radio]");
                    question.data("radioBtns", radioBtns);

                    radioBtns.on("change", function () {
                        var radio = jQuery(this);
                        if (!radio.data("changed")) {
                            progressBar.css({
                                width: ((i + 1) / questions.length) * 100 + "%",
                            });
                            radioBtns.data("changed", true);
                            questions.eq(currentIndex).addClass("marcado");
                        }
                        if (i + 1 === questions.length) {
                            btnFinish.removeClass('stop');
                            btnFinish.addClass('activo');
                        }
                    })
                })
                btnFinish.on("click", function (e) {
                    if (!btnFinish.hasClass("stop")) {
                        document.getElementById('mensajeError2').classList.remove('activemensaje');
                        questions.eq(currentIndex).removeClass(activeClass);
                        currentIndex = 0
                        questions.eq(currentIndex).addClass(activeClass);
                        btnBack.css('display', 'none');
                        btnNext.css('display', 'block');
                        btnFinish.css('display', 'none');                    
                        btnNext.addClass('stop');
                        var questions2 = document.querySelectorAll('.container_test .pregunta');
                        for (let i = 0; i < questions2.length; i++) {
                            questions2[i].classList.remove('leido');                         
                        }
                        var inputSelect = $('input[data-option]:checked');
                        for (let i = 0; i < inputSelect.length; i++) {
                            puntos = parseInt(inputSelect[i].value) + puntos;
                        }
                        if (puntos <= 4) {
                            $('#finalizado').addClass("bajo");
                        }
                        if (puntos >= 5 & puntos <= 7) {
                            $('#finalizado').addClass("medio");
                        }
                        if (puntos >= 8 & puntos <= 10) {
                            $('#finalizado').addClass("alto");
                        }
                    }else{
                        document.getElementById('mensajeError2').classList.add('activemensaje');
                        setTimeout(function(){                                    
                            document.getElementById('mensajeError2').classList.remove('activemensaje');
                        }, 3000);
                    }
                })

            })
        }
    },
    contacto: {
        init: function () {
            var formespacio = document.querySelectorAll('.form-group');
            var formespacioinput = document.querySelectorAll('.form-input');

            function inputcheck() {
                for (let i = 0; i < formespacioinput.length; i++) {
                    if (!formespacioinput[i].value) {
                        formespacioinput[i].parentElement.classList.remove("ok");
                    } else {
                        formespacioinput[i].parentElement.classList.add("ok");
                    }
                }
            }

            var formespacioinput2 = document.querySelectorAll('.form-input');
            
            $('.form-input').on('change', () => {
                formespacioinput2.forEach(element => {       
                    if (!element.value == "") {
                        element.parentElement.classList.add("ok");  
                    }else{
                        element.parentElement.classList.remove("ok");  
                    }
                });
            });

            document.addEventListener("keydown", function(event) {
                if (event.keyCode == 9) {
                    for (let i = 0; i < formespacioinput.length; i++) {                        
                        formespacioinput[i].addEventListener('focusin', (event) => {
                            formespacioinput[i].parentElement.classList.add('focusin');
                        });
                        formespacioinput[i].addEventListener('focusout', (event) => {
                            formespacioinput[i].parentElement.parentElement.classList.remove('focusin');
                            formespacioinput[i].parentElement.parentElement.querySelector("span.span-animation").classList.remove("animacion");
                            if (formespacioinput[i].value) {
                                formespacioinput[i].parentElement.parentElement.classList.add('ok');
                            }
                        });
                    }
                }                
            })


            function validateInput(e) {
                var inputSelect2 = document.querySelectorAll('input[data-option]');
                for (let i = 0; i < inputSelect2.length; i++) {
                    inputSelect2[i].checked = false;
                }

                var name = document.getElementById('name');
                var email = document.getElementById('email');
                val1 = 0;
                val2 = 0;
                if (!name.value) {
                    name.parentElement.classList.add("error");
                    e.preventDefault();
                } else {
                    name.parentElement.classList.remove("error");
                    val1 = 1;
                }
                if (!email.value) {
                    email.parentElement.classList.add("error");
                    e.preventDefault();
                } else {
                    email.parentElement.classList.remove("error");
                    val2 = 1;
                }
                validate = val1 * val2;
                if (validate == 1) {
                    var nameVal = name.value;
                    var emailVal = email.value;
                    e.preventDefault(e);
                    enviarData(nameVal, emailVal, puntos);
                    document.getElementById('finalizado-contact').classList.remove('mostrar');
                    document.getElementById('finalizado-contact').classList.add('ocultar');
                    document.getElementById('gracias').classList.add('mostrar');
                    document.getElementById('gracias').classList.remove('ocultar');
                    setTimeout(function(){                                    
                        document.querySelector("#gracias .container_test").classList.add('active');
                    }, 5);
                }
            }




            function enviarData(nameVal, emailVal, puntos) {                

                let dataobj = { nobreusuario: nameVal, correousuario: emailVal, calificacion: puntos}   
                
                postData('https://example.com/answer', dataobj)
                    .then((data) => {
                        console.log(data); // JSON data parsed by `data.json()` call
                    });

            }


            // Example POST method implementation:
            async function postData(url = '', data = {}) {
                // Default options are marked with *
                const response = await fetch(url, {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    redirect: 'follow', // manual, *follow, error
                    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                    body: JSON.stringify(data) // body data type must match "Content-Type" header
                });
                return response.json(); // parses JSON response into native JavaScript objects
            }




            document.addEventListener("click", function (e) {
                if (e.target.closest(".form-input")) {
                    formespacio.forEach(function (shinyItem) {
                        shinyItem.classList.remove("focusin");
                    });
                    e.target.parentElement.classList.add("focusin");
                } else {
                    formespacio.forEach(function (shinyItem) {
                        shinyItem.classList.remove("focusin");
                    });
                }
                inputcheck()
                if (e.target.closest("form button")) {
                    validateInput(e)             
                }
            })
        }
    }
}


if ($('#preguntas').length > 0) {
    MyApp.initQuiz.init();
}

if ($('#finalizado').length > 0) {
    MyApp.contacto.init();
}

