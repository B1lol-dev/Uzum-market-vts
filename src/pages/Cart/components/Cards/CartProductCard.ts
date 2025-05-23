import axios from "axios";
import { API_URL } from "../../../../constants/constants";

// interfaces
declare global {
  interface Window {
    CartDeleteProduct(id: any): void;
  }
}

export const CartProductCard = (data: any): string => {
  window.CartDeleteProduct = (id: any): void => {
    axios.get(`${API_URL}/carts/1`).then((res) => {
      const { products: cardProducts } = res?.data;

      console.log(cardProducts);

      const filteredData = cardProducts.filter(
        (cardProduct: any) => cardProduct.id !== id
      );

      axios
        .put(`${API_URL}/carts/1`, {
          products: [...filteredData],
        })
        .then((res) => {
          console.log(res);
        });
    });
  };

  const trash_icon = /*html*/ `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M9.75 3.5C9.33579 3.5 9 3.83579 9 4.25V5H15V4.25C15 3.83579 14.6642 3.5 14.25 3.5H9.75ZM7.5 4.25V5H3.75C3.33579 5 3 5.33579 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5H4.30005L5.62088 19.9681C5.73386 21.1202 6.70255 21.9985 7.86014 21.9985H16.1399C17.2975 21.9985 18.2661 21.1202 18.3791 19.9681L19.7 6.5H20.25C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5H16.5V4.25C16.5 3.00736 15.4926 2 14.25 2H9.75C8.50736 2 7.5 3.00736 7.5 4.25ZM11 9.75C11 9.33579 10.6642 9 10.25 9C9.83579 9 9.5 9.33579 9.5 9.75V17.25C9.5 17.6642 9.83579 18 10.25 18C10.6642 18 11 17.6642 11 17.25V9.75ZM14.5 9.75C14.5 9.33579 14.1642 9 13.75 9C13.3358 9 13 9.33579 13 9.75V17.25C13 17.6642 13.3358 18 13.75 18C14.1642 18 14.5 17.6642 14.5 17.25V9.75Z" fill="black"></path>
  </svg>
  `;

  const date = new Date();

  const getMonthName = (): string => {
    switch (date.getMonth()) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        return date.getMonth().toString();
    }
  };

  return /*html*/ `
    <div class="py-3.5 w-[834px] border-b-1 border-b-um-boulder last:border-none" data-cart-product>
      <p>Uzum Market omborida</p>
      <h1>${date.getDay() + 1}-${getMonthName()}dan boshlab yetkazamiz</h1>
      <div class="flex gap-5 mt-3">
        <input type="checkbox" checked class="accent-um-lonestar">
        <div class="flex gap-5">
          <img src=${data.thumbnail} alt=${
    data.title
  } height="120" width="120" class="bg-um-athens-gray rounded">
          <div class="flex flex-col justify-between w-70">
            <a href="/product/${data.id}" onclick="location.href = '/product/${
    data.id
  }'">
              <h1>${data.title}</h1>
            </a>
            <div>
              <h3>Sotuvchi: No Info</h3>
              <h3>Rang: No Info</h3>
            </div>
          </div>
          <div class="flex items-center">
            <div class="rounded-[2px] border-1 border-um-boulder text-um-boulder flex items-center">
              <button type="button" class="w-10 text-2xl" onclick="this.nextElementSibling.value=Number(this.nextElementSibling.value)-1; if(this.nextElementSibling.value < 1){this.nextElementSibling.value = 1}; this.closest('[data-cart-product]').querySelector('[data-cart-product-price]').innerText = (${Number(
                data.price * (1 - data.discountPercentage / 100)
              ).toFixed(
                2
              )} * this.nextElementSibling.value) + ' USD'">-</button>
              <input type="number" value="1" min="1" class="w-10 text-center no-inp-btns text-sm" oninput="this.closest('[data-cart-product]').querySelector('[data-cart-product-price]').innerText = (${Number(
                data.price * (1 - data.discountPercentage / 100)
              ).toFixed(2)} * this.value) + ' USD'">
              <button type="button" class="w-10 text-2xl" onclick="this.previousElementSibling.value=Number(this.previousElementSibling.value)+1; this.closest('[data-cart-product]').querySelector('[data-cart-product-price]').innerText = (${Number(
                data.price * (1 - data.discountPercentage / 100)
              ).toFixed(
                2
              )} * this.previousElementSibling.value) + ' USD'">+</button>
            </div>
          </div>
        </div>
        <div class="flex flex-col ml-auto items-end">
          <button type="button" class="flex text-um-manatee text-sm gap-1 items-center transition duration-200 hover:text-um-shark" onclick="this.closest('[data-cart-product]').remove(); window.CartDeleteProduct(${
            data.id
          })">
            ${trash_icon}
            Yo'q qilish
          </button>
          <h2 class="text-um-shark font-medium text-xl mt-4" data-cart-product-price>${Number(
            data.price * (1 - data.discountPercentage / 100)
          ).toFixed(2)} USD</h2>
          <p class="text-um-boulder line-through text-sm mt-1">${data.price}</p>
        </div>
      </div>
    </div>    
  `;
};
