<template>
  <div>
    <v-container>
      <v-btn-toggle mandatory color="deep-purple accent-3">
        <v-row>
          <v-col v-for="(team, n) in myteams" :key="n">
            <v-btn @click="changeteam(team)">{{ team }}</v-btn>
            <v-spacer></v-spacer>
          </v-col>
        </v-row>
      </v-btn-toggle>
      <v-row>
        <template v-for="(arc, n) in arcticles">
          <v-col :key="n" v-if="arc.team == choosenteam">
            <ArcticlePreview :arcticle="arc" />
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ArcticlePreview from "./ArcticlePreview";
export default {
  components: {
    ArcticlePreview,
  },

  data() {
    return {
      arcticles: [],
      myteams: [],
      choosenteam: [],
    };
  },

  async mounted() {
    let res = await this.getart();
    console.log(res.data);
    for (let key in res.data) {
      this.myteams.push(key);
      res.data[key].forEach((art) => {
        if (art.source == "Walla") {
          art.image = "https://" + art.image;
          art.sourceImage =
            "https://3.bp.blogspot.com/_4xZra053A3w/TSy6VT_x8vI/AAAAAAAAAYw/kQfcil7F7GM/s1600/walla-sport.gif";
        } else if (art.source == "Sport5") {
          art.sourceImage =
            "https://www.hyundaimotors.co.il/wp-content/uploads/2019/02/sport5-logo.png";
        } else {
          art.sourceImage =
            "https://seeklogo.com/images/O/one-sport-logo-0BD7550E80-seeklogo.com.gif";
        }
        let article = {
          team: key,
          title: art.title,
          subtitle: art.sub_title,
          body: art.body,
          image: art.image,
          source: art.source,
          date: art.date,
          sourceImage: art.sourceImage,
        };
        this.choosenteam = this.myteams[0];
        console.log(article);
        this.arcticles.push(article);
      });
    }
  },
  methods: {
    async getart() {
      return await this.$store.dispatch("getMyArticles", {});
    },
    changeteam(team) {
      this.choosenteam = team;
    },
  },
};
</script>

<style>
</style>