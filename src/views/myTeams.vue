<template>
  <v-item-group multiple>
    <v-container>
      <v-row>
        <v-col v-if="dialog">
          <v-alert
            color="primary"
            dark
            icon="mdi-vuetify"
            border="left"
            prominent
          >
            Either you are not following any teams or there is a connection
            problem. please check your settings and contatct us.
          </v-alert>
        </v-col>
        <v-col v-for="(t, i) in teams" :key="i" cols="12" md="4">
          <v-item dark>
            <v-card hover class="a" height="200">
              <v-card-title>{{ t }}</v-card-title>
              <v-card-actions>
                <v-btn warning @click="remove(i)">Remove</v-btn>
              </v-card-actions>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  data() {
    return {
      teams: [],
      dialog: false,
    };
  },
  async created() {
    await this.initTeams();
  },
  methods: {
    async remove(i) {
      let name = this.teams[i].replaceAll(" ", "_");
      let ret = { teams: name };
      console.log(ret);
      let res = await this.$store.dispatch("removeTeam", { ret });
      console.log(res);
      this.teams.splice(i, 1);
      if (this.teams.length < 1) {
        this.dialog = true;
      }
    },
    async initTeams() {
      let res = await this.$store.dispatch("getMyTeams", {});
      res = res.data.Message;
      console.log(res);
      res.forEach((part) => {
        console.log(part);
        this.teams.push(part.replaceAll("_", " "));
      });
      console.log(this.teams);

      if (this.teams.length < 1) {
        this.dialog = true;
      }
    },
  },
};
</script>

<style lang="sass">
$color-pack: false

@import '~vuetify/src/styles/main.sass'
</style>