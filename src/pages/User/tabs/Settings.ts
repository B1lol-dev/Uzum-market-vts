// utils
import { Auth } from "../../../utils/auth";

// declorations
const auth = new Auth();

export const Settings = (): string => {
  return /*html */ `
  <div class="w-full h-[434px] p-16 rounded border-1 border-um-manatee justify-center mt-6 gap-8">
    <h1>Maʼlumotlarim</h1>
    <form id="user_settings_form">
        <div>
            <label>
                <p>Familiya <span>*</span></p>
                <input type="text" value="Doe">
            </label>
            <label>
                <p>Ism <span>*</span></p>
                <input type="text" value="John">
            </label>
            <label>
                <p>Otasini ismi</p>
                <input type="text" value="Steve">
            </label>
        </div>
        <div>
            <label>
                <p>Tug'ilgan sana</p>
                <input type="date" value="">
            </label>
            <label>
                <p>Jins</p>
                <select>
                    <option value="male">Erkak</option>
                    <option value="female">Ayol</option>
                </select>
            </label>
        </div>
        <div>
            <label>
                <p>Elektron pochta <span>*</span></p>
                <input type="email" value="">
            </label>
            <label>
                <p>Telefon raqami <span>*</span></p>
                <input type="tel" value="+998">
            </label>
        </div>
    </form>
  </div>
  `;
};
