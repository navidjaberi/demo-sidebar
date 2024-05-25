<template>
  <VCard>
    <VLayout>
      <VNavigationDrawer v-model="drawer" temporary :width="400">
        <VListItem class="text-center" title="Navid Jaberi"></VListItem>
        <VDivider></VDivider>
        <VList v-model:opened="open" nav>
          <BaseLoadingAndError
            :error="fetchError"
            :loading="loading"
            @reload="sidebarData()"
          />
          <VTreeview
            :items="sidebarItems"
            transition
            item-key="id"
            item-value="id"
            item-title="title"
          >
            <template v-slot:title="{ item }">
              <h4 class="text-primary">
                {{ item.title }}
              </h4>
              <small class="text-wrap">
                {{ item.description }}
              </small>
            </template>
            <template v-slot:prepend>
              <!-- icon should display here -->
            </template>
          </VTreeview>
        </VList>
      </VNavigationDrawer>
      <VMain class="h-screen">
        <VRow no-gutters align="center" justify="center" class="pa-10 fill-height">
          <VCol class="fill-height" md="6" lg="7">
            <VImg
              src="https://wallpaper.dog/large/5557744.jpg"
              cover
              class="h-100 rounded-xl d-flex align-center justify-center"
            >
              <div class="text-center w-50 text-white mx-auto">
                <h2 class="mb-4">Start your journey today</h2>
                <VBtn @click.stop="drawer = !drawer"> Click to open sidebar </VBtn>
              </div>
            </VImg>
          </VCol>
        </VRow>
      </VMain>
    </VLayout>
  </VCard>
</template>
<script setup lang="ts">
import { VTreeview } from "vuetify/labs/VTreeview";
import { useSidebarData } from "@/store/sidebarData";
const store = useSidebarData();
const drawer = ref<boolean>(false);
const open = ref<string[]>(["Users"]);
const fetchError = ref<boolean | null>(null);
const loading = ref<boolean | null>(null);
const sidebarItems = computed(() => {
  return store.sidebarData;
})
const sidebarData = () => {
  store.getSidebarData(loading,fetchError);
};
onMounted(() => {
  sidebarData();
});
</script>
