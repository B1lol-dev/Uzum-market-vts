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

export const Header = () => {
  const navSubLinks: string[] = [
    "Elektronika",
    "Maishiy texnika",
    "Kiyim",
    "Poyabzallar",
    "Aksessuarlar",
    "Goʻzallik va parvarish",
    "Salomatlik",
    "Uy-roʻzgʻor buyumlari",
    "Qurilish va taʼmirlash",
  ];

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

                <form class="rounded overflow-hidden border-1 border-[#36364033] h-[40px] max-w-[528px] w-full relative flex items-center justify-between ml-1.5">
                    <input type="text" placeholder="Mahsulotlar va turkumlar izlash" class="px-4 text-um-shark text-sm h-full outline-none w-[90%] placeholder:text-um-boulder">
                    <button type="submit" class="flex items-center justify-center bg-um-athens-gray h-full px-7">
                        <img src=${search_icon} alt="search">
                    </button>
                </form>
                
                <div class="flex gap-2 items-center ml-auto">
                    <button type="button" class="flex items-center gap-2">
                        <img src=${user_icon} alt="user">
                        Kirish
                    </button>
                    <button type="button" class="flex items-center gap-2">
                        <img src=${heart_icon} alt="saved">
                        Saralangan
                    </button>
                    <button type="button" class="flex items-center gap-2">
                        <img src=${bag_icon} alt="cart">
                        Savat
                    </button>
                </div>
            </nav>    
        `)}
    </header>
    <div>
        ${Container(/*html*/ `
            <div class="flex items-center">
                <a href="#" class="flex items-center gap-1 font-semibold text-xs">
                    <img src=${union_icon} alt="">
                    Muddatli to'lov
                </a>
                <ul class="flex items-center gap-5 ml-5 mr-auto">
                    ${navSubLinks
                      .map(
                        (link: string) =>
                          /*html*/ `<li class="text-sm text-um-mid-gray"><a href="#">${link}</a></li>`
                      )
                      .join("")}
                </ul>
                <select class="text-sm text-um-mid-gray cursor-pointer">
                    <option value="more">Yana</option>
                </select>
            </div>    
        `)}
    </div>
    `;
};
