// components
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { UserSidebar } from "./components/UserSidebar";

// tabs
import { Orders } from "./tabs/Orders";
import { Reviews } from "./tabs/Reviews";
import { Settings } from "./tabs/Settings";

// utils
import { Auth } from "../../utils/auth";

// declorations
const auth = new Auth();

export const User = (tab: any): string => {
  if (!auth.token.get()) {
    location.href = "/";
    return "";
  }

  return /*html*/ `
    ${Header()}
    <main>
        <section>
            ${Container(/*html*/ `
                <div class="flex gap-6">
                    ${UserSidebar(tab)}
                    <div class="pb-20 w-full">
                        ${
                          tab === "orders"
                            ? Orders()
                            : tab === "reviews"
                            ? Reviews()
                            : tab === "settings"
                            ? Settings()
                            : (location.href = "/user/orders")
                        }
                    </div>
                </div>
            `)}
        </section>
    </main>
    ${Footer()}
  `;
};
