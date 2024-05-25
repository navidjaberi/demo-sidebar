import { defineStore } from "pinia";
import { type SidebarItems, type SidebarItemsArray } from "~/types/sidebarItems";
export const useSidebarData = defineStore("sidebarData", () => {
  const sidebarData = ref<SidebarItemsArray>([]);
  const sidebarDataFiltered = (dataList: SidebarItemsArray | SidebarItems) => {
    if (Array.isArray(dataList)) {
      dataList.forEach((element: SidebarItems) => {
        if (element.children && element.children.length !== 0) {
          sidebarDataFiltered(element);
        } else {
          delete element.children;
        }
      });
    } else {
      if (dataList.children) {
        dataList.children.forEach((element: SidebarItems) => {
          if (element.children && element.children.length !== 0) {
            sidebarDataFiltered(element);
          } else {
            delete element.children;
          }
        });
      }
    }
  };
  const getSidebarData = async (loading: Ref<boolean | null>, getError: Ref<boolean | null>) => {
    try {
      loading.value = true;
      const { data, pending } = await useFetch(
        "https://run.mocky.io/v3/63120735-7fbe-428a-9226-c10ca1ab43b6",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      sidebarData.value = data.value as SidebarItemsArray;
      sidebarDataFiltered(sidebarData.value);
      loading.value = pending.value;
    } catch (e) {
      console.log(e);
      loading.value = false;
      getError.value = true;
    }
  };
  return { getSidebarData, sidebarData };
});
