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
            Either you are following all of the teams or there is a connection
            problem. please check your settings and contatct us.
          </v-alert>
        </v-col>
        <v-col v-for="(t, i) in teams" :key="i" cols="12" md="4">
          <v-item dark>
            <v-card hover class="a" height="200">
              <v-card-title>{{ t }}</v-card-title>
              <v-card-actions>
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  large
                  color="purple"
                  @click="Follow(i)"
                >
                  <v-icon dark> mdi-comment-plus </v-icon>
                </v-btn>
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
      allteams: [],
      dialog: false,
    };
  },
  created() {
    this.allteamsa();
    this.initTeams();
  },
  methods: {
    async initTeams() {
      let res = await this.$store.dispatch("getMyTeams", {});
      res = res.data.Message;
      console.log(res);
      res.forEach(function (part, index, theArray) {
        theArray[index] = part.replaceAll("_", " ");
      });

      console.log(res);
      console.log(this.allteams);
      this.allteams.forEach((element) => {
        let bol = true;
        res.forEach((el) => {
          if (el == element && bol) {
            bol = false;
          }
        });
        if (bol) {
          this.teams.push(element);
          bol = true;
        }
      });
      console.log(this.teams);
      if (this.teams.length < 1) {
        this.dialog = true;
      }
    },
    allteamsa() {
      this.allteams.push("MACCABI TEL AVIV");
      this.allteams.push("IRONI KIRYAT SHMONA");
      this.allteams.push("MACCABI PETAH TIKVA");
      this.allteams.push("MACCABI NETANYA");
      this.allteams.push("MACCABI HAIFA");
      this.allteams.push("FC ASHDOD");
      this.allteams.push("HAPOEL TEL AVIV");
      this.allteams.push("HAPOEL KFAR SABA");
      this.allteams.push("HAPOEL HAIFA");
      this.allteams.push("HAPOEL HADERA");
      this.allteams.push("HAPOEL BEER SHEVA");
      this.allteams.push("BNEI SAKHNIN");
      this.allteams.push("BNEI YEHUDA");
      this.allteams.push("BEITAR JERUSALEM");
    },
    async Follow(i) {
      let team = [];
      let tochange = this.teams[i];
      team.push(tochange.replaceAll(" ", "_"));
      console.log(team);
      await this.$store.dispatch("addteam", { team });

      this.teams.splice(i, 1);
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