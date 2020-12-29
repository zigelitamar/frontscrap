<template>
  <div id="app">
    <v-app id="inspire">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-card
            color="grey lighten-3"
            class="pa-md-8 mx-lg-auto"
            max-width="800"
            :elevation="16"
            rounded
          >
            <h1 dir="rtl">{{ arcticle.title }}</h1>
            <br />
            <h5 dir="rtl">{{ arcticle.subtitle }}</h5>
            <v-img :src="arcticle.image" max-height="225" contain> </v-img>
            <br />
            <div v-for="(p, index) in paragraphs" :key="index">
              <p dir="rtl" :key="index">{{ p }}</p>
            </div>
            <h4 dir="rtl">מקור-{{ arcticle.source }}</h4>
            <h5 dir="rtl">פורסם ב-{{ arcticle.date }}</h5>
          </v-card>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arcticle: this.$route.params.id,
      paragraphs: [],
    };
  },
  // props: {
  //   arcticle: {
  //     type: Object,
  //     required: false,
  //   },
  // },
  async mounted() {
    this.paragraphs = this.arcticle.body.split("\n\n");
    this.paragraphs.forEach((element) => {
      console.log("*" + element);
    });
  },
  methods: {
    async login() {
      console.log("HIIIIIIIIIIIIIIIIIIIIII");

      this.$store
        .dispatch("login", { username: "itamar", password: "1234" })
        .then((res) => console.log(res));
    },
    async getart() {
      console.log(this.arcticle);
    },
  },
};
</script>

<style>
.h1 {
  font-family: unquote("Shrikhand");
}
</style>