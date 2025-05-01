export const ProductCardSkeleton = (): string => {
  return /*html*/ `
        <div class="flex flex-col max-w-[232px] w-full gap-3">
            <div class="w-full h-[300px] flex items-center justify-center bg-um-athens-gray rounded-lg"></div>
            <div class="flex flex-col items-start py-3 px-2">
                <h2 class="bg-um-shark h-3 overflow-y-scroll w-full rounded-full"></h2>
                <p class="flex items-center bg-um-manatee mt-2 h-2 rounded-full w-[60%]"></p>
                <div class="flex justify-between items-end w-full mt-5">
                    <div class="w-full">
                        <h3 class="text-sm bg-um-shark h-4 w-[50%] rounded-full"></h3>
                    </div>
                </div>
            </div>
        </div>
    `;
};
