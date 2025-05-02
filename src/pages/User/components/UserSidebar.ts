// utils
import { Auth } from "../../../utils/auth";

// declorations
const auth = new Auth();

export const UserSidebar = (tab: any): string => {
  setTimeout(() => {
    auth.getMyInfo().then((res) => {
      const { data } = res;
      document.getElementById(
        "user_sidebar_name"
      )!.innerText = `${data.firstName} ${data.lastName}`;
    });
  }, 0);

  return /*html*/ `
    <div class="w-[332px]">
        <h1 id="user_sidebar_name" class="text-um-shark font-semibold text-3xl"></h1>
        <ul class="flex flex-col items-start mt-8">
            <button type="button" class="w-full text-start py-3 px-2.5 text-um-shark rounded-lg ${
              tab === "orders" ? "bg-um-athens-gray" : ""
            }" onclick="location.href = '/user/'+this.dataset.name" data-name="orders">Buyurtmalarim</button>
            <button type="button" class="w-full text-start py-3 px-2.5 text-um-shark rounded-lg ${
              tab === "reviews" ? "bg-um-athens-gray" : ""
            }" onclick="location.href = '/user/'+this.dataset.name" data-name="reviews">Sharhlar</button>
            <button type="button" class="w-full text-start py-3 px-2.5 text-um-shark rounded-lg ${
              tab === "settings" ? "bg-um-athens-gray" : ""
            }" onclick="location.href = '/user/'+this.dataset.name" data-name="settings">Ma'lumotlarim</button>
        </ul>
    </div>
  `;
};
