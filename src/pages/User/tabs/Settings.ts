// utils
import { Auth } from "../../../utils/auth";

// declorations
const auth = new Auth();

export const Settings = (): string => {
  setTimeout(() => {
    const user_settings_form = document.getElementById(
      "user_settings_form"
    )! as HTMLFormElement;

    auth.getMyInfo().then((res) => {
      const { data } = res;
      user_settings_form
        .querySelectorAll("[data-type]")
        .forEach((type: any) => {
          type.value = data[type.dataset.type];
        });
    });

    // logout button
    const user_settings_logout = document.getElementById(
      "user_settings_logout"
    ) as HTMLButtonElement;

    user_settings_logout.addEventListener("click", () => {
      auth.token.remove();
      auth.refreshToken.remove();
      location.href = "/";
    });
  }, 0);

  return /*html */ `
  <div class="w-full p-16 rounded border-1 border-um-manatee justify-center mt-6 gap-8">
    <h1 class="text-2xl text-um-shark font-semibold mb-6">Maʼlumotlarim</h1>
    <form id="user_settings_form" class="flex flex-col gap-9 items-start">
        <div class="flex gap-9">
            <label>
                <p>Familiya <span class="text-red-500">*</span></p>
                <input type="text" class="min-h-12 p-3 rounded-xl text-base text-um-shark border-1 border-um-manatee w-[292px]" value="" data-type="lastName">
            </label>
            <label>
                <p>Ism <span class="text-red-500">*</span></p>
                <input type="text" class="min-h-12 p-3 rounded-xl text-base text-um-shark border-1 border-um-manatee w-[292px]" value="" data-type="firstName">
            </label>
            <label>
                <p>Otasini ismi</p>
                <input type="text" class="min-h-12 p-3 rounded-xl text-base text-um-shark border-1 border-um-manatee w-[292px]" value="">
            </label>
        </div>
        <div class="flex gap-9">
            <label>
                <p>Tug'ilgan sana</p>
                <input type="date" class="min-h-12 p-3 rounded-xl text-base text-um-shark border-1 border-um-manatee w-[292px]" value="" data-type="age">
            </label>
            <label>
                <p>Jins</p>
                <select class="bg-um-athens-gray p-3 rounded-xl text-base text-um-shark" data-type="gender">
                    <option value="male">Erkak</option>
                    <option value="female">Ayol</option>
                </select>
            </label>
        </div>
        <div class="flex gap-9">
            <label>
                <p>Elektron pochta <span class="text-red-500">*</span></p>
                <input type="email" class="min-h-12 p-3 rounded-xl text-base text-um-shark border-1 border-um-manatee w-[292px]" value="" data-type="email">
            </label>
            <label>
                <p>Telefon raqami <span class="text-red-500">*</span></p>
                <input type="tel" class="min-h-12 p-3 rounded-xl text-base text-um-shark border-1 border-um-manatee w-[292px]" value="" data-type="phone">
            </label>
        </div>
        <button type="button" class="py-3 px-5 min-h-12 font-medium rounded-xl hover:bg-um-athens-gray" id="user_settings_logout">Tizimdan chiqish</button>
    </form>
  </div>
  `;
};
