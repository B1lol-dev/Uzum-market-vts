// components
import { Container } from "./Container";

// assets
import appstore_icon from "../assets/icons/socials/apple.svg";
import google_play_icon from "../assets/icons/socials/google_play.svg";

import instagram_icon from "../assets/icons/socials/instagram_icon.svg";
import telegram_icon from "../assets/icons/socials/telegram_icon.svg";
import youtube_icon from "../assets/icons/socials/telegram_icon.svg";
import facebook_icon from "../assets/icons/socials/facebook_icon.svg";

export const Footer = (): string => {
  const socials = [instagram_icon, telegram_icon, youtube_icon, facebook_icon];

  return /*html*/ `
    <footer class="bg-um-nero block!">
        ${Container(/*html*/ `
            <div class="flex justify-between pt-7">
                <ul class="flex flex-col gap-4 text-xs text-um-manatee">
                    <h1 class="text-um-shark font-medium text-sm">Biz haqimizda</h1>
                    <li><a href="#">Topshirish punktlari</a></li>
                    <li><a href="#">Vakansiyalar</a></li>
                </ul>
                <ul class="flex flex-col gap-4 text-xs text-um-manatee">
                    <h1 class="text-um-shark font-medium text-sm">Foydalanuvchilarga</h1>
                    <li><a href="#">Biz bilan bogʻlanish</a></li>
                    <li><a href="#">Savol-Javob</a></li>
                </ul>
                <ul class="flex flex-col gap-4 text-xs text-um-manatee">
                    <h1 class="text-um-shark font-medium text-sm">Tadbirkorlarga</h1>
                    <li><a href="#">Uzumda soting</a></li>
                    <li><a href="#">Sotuvchi kabinetiga kirish</a></li>
                </ul>
                <div>
                    <h2 class="text-um-shark font-bold text-sm">Ilovani yuklab olish</h2>
                    <div class="flex gap-6">
                        <button type="button" class="flex items-center text-sm gap-1">
                            <img src=${appstore_icon} alt="">
                            AppStore
                        </button>
                        <button type="button" class="flex items-center text-sm gap-1">
                            <img src=${google_play_icon} alt="">
                            Google Play
                        </button>
                    </div>
                    <h2 class="text-um-shark font-bold text-sm mt-12">Uzum ijtimoiy tarmoqlarda</h2>
                    <div class="flex items-center gap-3 mt-4">
                        ${socials
                          .map((social: string) => {
                            return /*html*/ `
                            <a href="#">
                                <img src=${social} alt="">
                            </a>
                            `;
                          })
                          .join("")}
                    </div>
                </div>
            </div>
            <div class="border-t-1 border-[#36364033] mt-20 flex items-center justify-between py-4">
                <div class="flex gap-4 text-um-shark text-sm font-medium">
                    <a href="#">Maxfiylik kelishuvi</a>
                    <a href="#">Foydalanuvchi kelishuvi</a>
                </div>
                <p class="text-xs text-um-manatee">«2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
            </div>
        `)}
    </footer>
  `;
};
