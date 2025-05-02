import axios from "axios";
import { API_URL } from "../constants/constants";

// utils
import { Auth } from "../utils/auth";

// components
import { Container } from "./Container";

// assets
import logo_img from "../assets/logo_full.svg";
import search_icon from "../assets/icons/search_icon.svg";
import user_icon from "../assets/icons/user_icon.svg";
import heart_icon from "../assets/icons/heart_icon.svg";
import bag_icon from "../assets/icons/bag_icon.svg";
import catalog_icon from "../assets/icons/catalog_icon.svg";
import location_icon from "../assets/icons/location_icon.svg";
import uzb_flag_icon from "../assets/icons/flags/uzb.svg";
import union_icon from "../assets/icons/union_icon.svg";
import close_round_icon from "../assets/icons/close_round_icon.svg";

const auth = new Auth();

export const Header = () => {
  setTimeout(() => {
    const header_search_form = document.getElementById(
      "header_search_form"
    )! as HTMLFormElement;
    header_search_form.addEventListener("submit", (e: Event) => {
      e.preventDefault();

      const search_inp = header_search_form.children[0]! as HTMLInputElement;

      location.pathname = `/search/${search_inp.value.trim().toLowerCase()}`;
    });

    // sub navbar categories

    axios
      .get(`${API_URL}/products/categories`)
      .then((res) => {
        const header_subnav_links = document.getElementById(
          "header_subnav_links"
        )! as HTMLUListElement;
        const { data } = res;
        header_subnav_links.innerHTML = data
          .map(
            (link: any) =>
              /*html*/ `<li class="text-sm text-um-mid-gray text-nowrap"><a href="/category/${link.slug}" onclick="location.pathname = '/category/${link.slug}'">${link.name}</a></li>`
          )
          .join("");
      })
      .catch((err) => {
        console.error(err);
      });

    // auth
    const auth_modal = document.getElementById(
      "auth_modal"
    )! as HTMLFormElement;

    auth_modal.addEventListener("submit", (e: Event) => {
      e.preventDefault();
      const username = auth_modal.querySelector(
        "input[type='text']"
      )! as HTMLInputElement;
      const password = auth_modal.querySelector(
        "input[type='password']"
      )! as HTMLInputElement;

      auth.login(
        username.value,
        password.value,
        () => {
          alert("username or password are incorrect");
          return null;
        },
        () => {
          auth_modal.closest("[data-auth-modal]")!.classList.toggle("hidden");
          location.reload();
        }
      );
    });

    // nav login info
    const nav_account_btn = document.getElementById(
      "nav_account_btn"
    )! as HTMLButtonElement;
    if (auth.token.get()) {
      auth.getMyInfo().then((res) => {
        const { data } = res;
        nav_account_btn.children[1].textContent = data.username;
        nav_account_btn.onclick = () => (location.pathname = "/user");
      });
    } else {
      nav_account_btn.children[1].textContent = "Kirish";
      nav_account_btn.addEventListener("click", () =>
        document.querySelector("[data-auth-modal]")!.classList.toggle("hidden")
      );
    }
  }, 0);

  return /*html*/ `
    <div class="bg-um-athens-gray py-2">
        ${Container(/*html*/ `
            <div class="flex items-center">
                <h2 class="flex items-center gap-1 text-um-shark text-sm">
                    <img src=${location_icon} alt="">
                    Shahar: <span class="underline font-medium">Toshkent</span>
                </h2>
                <h2 class="text-sm text-um-shark ml-6 font-medium">Topshirish punktlari</h2>
                <h2 class="text-sm text-um-manatee mx-auto">Buyurtmangizni 1 kunda bepul yetkazib beramiz!</h2>
                <a href="#" class="text-sm text-um-mid-gray">Savol-javoblar</a>
                <a href="#" class="text-sm text-um-mid-gray ml-4">Buyurtmalarim</a>
                <button type="button" class="flex items-center gap-1.5 ml-6">
                    <img src=${uzb_flag_icon} alt="uzb">
                    Оʻzbekcha
                </button>
            </div>
        `)}
    </div>
    <header>
        ${Container(/*html*/ `
            <nav class="flex items-center py-4">
                <a href="/" onclick="location.pathname = '/'">
                    <img src=${logo_img} alt="Uzum" height="32" width="215">
                </a>

                <button type="button" class="text-sm text-um-lonestar font-medium flex bg-um-turbo py-2 px-4 rounded ml-8 h-[40px]">
                    <img src=${catalog_icon} alt="">
                    Katalog
                </button>

                <form id="header_search_form" class="rounded overflow-hidden border-1 border-[#36364033] h-[40px] max-w-[528px] w-full relative flex items-center justify-between ml-1.5">
                    <input type="text" placeholder="Mahsulotlar va turkumlar izlash" class="px-4 text-um-shark text-sm h-full outline-none w-[90%] placeholder:text-um-boulder">
                    <button type="submit" class="flex items-center justify-center bg-um-athens-gray h-full px-7">
                        <img src=${search_icon} alt="search">
                    </button>
                </form>
                
                <div class="flex gap-2 items-center ml-auto">
                    <button type="button" class="flex items-center gap-2" id="nav_account_btn">
                        <img src=${user_icon} alt="user">
                        <span></span>
                    </button>
                    <button type="button" class="flex items-center gap-2">
                        <img src=${heart_icon} alt="saved">
                        Saralangan
                    </button>
                    <a href="/cart" onclick="location.pathname = '/cart'">
                        <button type="button" class="flex items-center gap-2">
                            <img src=${bag_icon} alt="cart">
                            Savat
                        </button>
                    </a>
                </div>
            </nav>    
        `)}
    </header>
    <div class="mb-6">
        ${Container(/*html*/ `
            <div class="flex items-center">
                <a href="#" class="flex items-center gap-1 font-semibold text-xs text-nowrap">
                    <img src=${union_icon} alt="">
                    Muddatli to'lov
                </a>
                <ul class="flex items-center gap-5 ml-10 mr-auto overflow-auto py-2" id="header_subnav_links">
                   
                </ul>
                <!-- <select class="text-sm text-um-mid-gray cursor-pointer">
                    <option value="more">Yana</option>
                </select> -->
            </div>    
        `)}
    </div>
    <div class="fixed top-0 left-0 z-10 bg-[#0009] h-screen w-screen flex items-center justify-center hidden" data-auth-modal>
        <form id="auth_modal" class="h-[500px] w-[400px] rounded-lg bg-white relative flex flex-col items-center gap-4 p-8">
            <button type="button" class="absolute top-8 right-8" onclick="this.closest('[data-auth-modal]').classList.toggle('hidden')">
                <img src=${close_round_icon} alt="x">
            </button>
            <h3 class="text-2xl font-semibold text-um-shark mt-2">Kirish</h3>
            <p class="">Akkauntga kirish uchun username va passwordni kiriting</p>
            <input type="text" placeholder="username" required class="bg-um-athens-gray text-xl p-4 w-full rounded-2xl focus:outline-1 focus:outline-um-lonestar">
            <input type="password" placeholder="password" required class="bg-um-athens-gray text-xl p-4 w-full rounded-2xl focus:outline-1 focus:outline-um-lonestar">
            <button type="submit" class="bg-um-lonestar text-xl p-4 w-full rounded-2xl text-um-nero">Kirish</button>
            <p class="text-center text-sm mt-auto">Avtotizatsiyadan o'tish orqali siz shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz </p>
        </form>
    </div>
    `;
};
