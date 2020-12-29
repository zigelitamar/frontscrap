<template>
  <v-navigation-drawer app dark class="blue-grey darken-1" floating permanent>
    <v-list shaped>
      <v-list-item
        v-for="([icon, text], i) in items"
        :key="i"
        link
        two-line
        :to="{ name: referals[i] }"
      >
        <v-list-item-icon>
          <v-icon large>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="font-weight-black">{{
            text
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    items: [
      ["mdi-bookshelf", "My Artciles"],
      ["mdi-soccer", "My teams"],
      ["mdi-eye-plus-outline", "Add teams"],
      ["mdi-exit-run", "Logout"],
    ],

    referals: ["articles", "myteams", "AddTeam", "login"],
  }),
};
</script>

<style>
</style>