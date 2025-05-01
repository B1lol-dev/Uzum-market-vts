export const CartProductCardSkeleton = (): string => {
  return /*html*/ `
    <div class="py-3.5 w-[834px] border-b-1 border-b-um-boulder last:border-none" data-cart-product>
      <p>Uzum Market omborida</p>
      <h1 class="w-[30%] h-3 rounded-full bg-um-shark"></h1>
      <div class="flex gap-5 mt-3">
        <input type="checkbox" checked class="accent-um-lonestar">
        <div class="flex gap-5">
          <div src="" alt="" class="bg-um-athens-gray rounded h-[120px] w-[120px]"></div>
          <div class="flex flex-col justify-between w-70">
            <a>
              <h1 class="w-[60%] h-3 rounded-full bg-um-shark"></h1>
            </a>
            <div>
              <h3 class="w-[30%] h-3 rounded-full bg-um-shark"></h3>
              <h3 class="w-[30%] h-3 rounded-full bg-um-shark mt-4"></h3>
            </div>
          </div>
          <div class="flex items-center">
            <div class="rounded-[2px] border-1 border-um-boulder text-um-boulder flex items-center bg-um-boulder w-30 h-9"></div>
          </div>
        </div>
        <div class="flex flex-col ml-auto items-end w-full">
          <button type="button" class="bg-um-manatee h-6 w-[50%] rounded-full"></button>
          <h2 class="mt-4 w-[60%] h-5 rounded-full bg-um-shark"></h2>
          <p class="bg-um-boulder h-3 mt-4 rounded-full w-[30%]"></p>
        </div>
      </div>
    </div>    
  `;
};
