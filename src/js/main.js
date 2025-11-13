import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import JustValidate from "just-validate";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/sass/style.scss";

const burger = document.querySelector(".burger"),
    close = document.querySelector(".header__menu-close"),
    menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
    menu.classList.add("header__menu_active");
    document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
    menu.classList.remove("header__menu_active");
    document.body.style.overflow = "";
});

try {
    new Swiper(".works__slider", {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".icon-right-open",
            prevEl: ".icon-left-open",
        },
        breakpoints: {
            // when window width is >= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 35,
            },
        },
        modules: [Navigation, Pagination],
    });
} catch (e) {}

try {
    const tabs = document.querySelectorAll(".catalog__tab");
    const contents = document.querySelectorAll(".catalog__content-item");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // Удаляем активный класс у всех табов и контента
            tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
            contents.forEach((c) => (c.style.display = "none"));

            // Добавляем активный класс к нажатому табу и показываем соответствующий контент
            tab.classList.add("catalog__tab_active");
            contents[index].style.display = "block";
        });
    });

    // Показываем первый контент при загрузке
    contents.forEach((c, i) => (c.style.display = i === 0 ? "block" : "none"));
} catch (e) {}

try {
    const validator = new JustValidate("form");

    validator
        .addField("#name", [
            {
                rule: "required",
                errorMessage: "Please fill the name",
            },
            {
                rule: "minLength",
                value: 2,
                errorMessage: "Min 2 symbols",
            },
        ])
        .addField("#email", [
            {
                rule: "required",
            },
            {
                rule: "email",
            },
        ])
        .addField(
            "#question",
            [
                {
                    rule: "required",
                },
                {
                    rule: "minLength",
                    value: 5,
                },
            ],
            {
                errorsContainer: document
                    .querySelector("#question")
                    .parentElement.querySelector(
                        ".error-message, .about__textarea-error"
                    ),
            }
        )
        .addField(
            "#checkbox",
            [
                {
                    rule: "required",
                },
            ],
            {
                errorsContainer: document
                    .querySelector("#checkbox")
                    .parentElement.parentElement.querySelector(
                        ".checkbox-error-message, .about__checkbox-error"
                    ),
            }
        )
        .onSuccess((event) => {
            const form = event.currentTarget;
            const formData = new FormData(form);

            fetch("https://httpbin.org/post", {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Success", data);
                    form.reset();
                });
        });
} catch (e) {}

try {
    const footervalidator = new JustValidate(".footer__form");

    footervalidator
        .addField("#email", [
            {
                rule: "required",
            },
            {
                rule: "email",
            },
        ])
        .addField(
            "#checkblock",
            [
                {
                    rule: "required",
                },
            ],
            {
                errorsContainer: document
                    .querySelector("#checkblock")
                    .parentElement.parentElement.querySelector(
                        ".footer__checkblock-error"
                    ),
            }
        )
        .onSuccess((event) => {
            const footerForm = event.currentTarget;
            const footerFormData = new FormData(footerForm);

            fetch("https://httpbin.org/post", {
                method: "POST",
                body: footerFormData,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Success", data);
                    footerForm.reset();
                });
        });
} catch (e) {}

// Обратите внимание, что значение block (в двух местах) можно спокойно поменять на flex, если вам это необходимо

// let text = "Hello world";
// const pi = 3.14;
// const isOpen = false; // false or true
// let a;

// text = "This is text";

// console.log(text);
// console.log(a);

// const object = {
//   name: "Ivan",
//   age: 32,
// };

// console.log(object.name);

// const titles = [
//   "Make your dream come true or decorate your home",
//   "create or buy",
//   "our store",
// ];

// function calc(a, b) {
//   console.log(a + b);
// }

// calc(5, 5);
// calc(10, 12);

// if (isOpen) {
//   console.log("Shop is open");
// } else {
//   console.log("Shop is closed");
// }

// const vase = document.querySelector(".touch__vase");

// vase.addEventListener("click", () => {
//   console.log(vase);
// });
