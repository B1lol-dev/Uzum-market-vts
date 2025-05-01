// assets
import star_icon from "../../assets/icons/star_icon.svg";
import add_to_bag_icon from "../../assets/icons/add_to_bag_icon.svg";

export const ProductCard = (data: any): string => {
  return /*html*/ `
    <a href="/product/${data.id}" onclick="location.pathname = '/product/${
    data.id
  }'">
        <div class="flex flex-col max-w-[232px] w-full gap-3 transition duration-200 hover:shadow-md group">
            <div class="w-full h-[300px] flex items-center justify-center bg-um-athens-gray rounded-lg">
                <img src=${data.thumbnail} alt=${
    data.title
  } class="w-full h-full object-contain transition duration-200 group-hover:scale-110">
            </div>
            <div class="flex flex-col items-start py-3 px-2">
                <h2 class="text-um-shark text-sm h-10 overflow-y-scroll">${
                  data.title
                }</h2>
                <p class="flex items-center text-xs text-um-manatee mt-2 font-light">
                    <img src=${star_icon} alt="star" class="mr-1">
                    ${data.rating}
                    (${data.reviews.length} sharsh)
                </p>
                <div class="bg-um-diesel flex justify-center items-center text-xs rounded px-1.5 py-0.5 mt-2">
                    ${Number(data.price / 8).toFixed(2)} USD/oyiga
                </div>
                <div class="flex justify-between items-end w-full mt-5">
                    <div>
                        <p class="text-xs line-through text-um-manatee">${
                          data.price
                        } USD</p>
                        <h3 class="text-sm text-um-shark">${Number(
                          data.price * (1 - data.discountPercentage / 100)
                        ).toFixed(2)} USD</h3>
                    </div>
                    <button type="button" class="border-1 border-um-manatee p-1 rounded-full"><img src=${add_to_bag_icon} alt="+"></button>
                </div>
            </div>
        </div>
    </a>
    `;
};
