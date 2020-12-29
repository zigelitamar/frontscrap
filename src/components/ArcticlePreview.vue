<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mx-auto" width="400" height="350" hover outlined>
        <v-img
          class="white--text align-end"
          max-height="225"
          contain
          :src="arcticle.image"
        >
        </v-img>
        <v-card-title dir="rtl">
          {{ arcticle.title }}
        </v-card-title>
        <v-card-subtitle class="pb-0">
          <v-img
            height="40"
            width="40"
            max-height="40"
            max-width="40"
            :src="arcticle.sourceImage"
          />
        </v-card-subtitle>

        <!-- <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text> -->

        <v-card-actions> </v-card-actions>
        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="#036358">
            <v-btn :to="{ name: 'article', params: { id: arcticle } }"
              >Start reading</v-btn
            >
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  data() {
    return { overlay: false };
  },
  props: {
    arcticle: {
      type: Object,
      required: true,
    },
  },
  methods: {
    startreading() {
      this.$router.push("/article/:id");
    },
  },
};
</script>

<style>
</style>