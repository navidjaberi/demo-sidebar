<template>
  <div class="text-center mt-4 px-2">
    <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>
    <div v-else-if="error">
      <p class="text text-red">failed to fetch</p>
      <v-btn variant="tonal" class="mt-5" @click="reload" color="primary"> reload </v-btn>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        error: {
            type: [Boolean, null],
            required: true,
        },
        loading: {
            type: [Boolean, null],
            required: true,
        },
    },
    emits: ["reload"],
    setup(props, context) {
        const reload = () => {
            context.emit("reload");
        };
        return { reload };
    },
  
};
</script>
