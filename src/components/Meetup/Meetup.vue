<template>
<v-container>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          :src="meetup.imageUrl"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{meetup.title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
         
        <v-card-text>
          <div class="info--text">
           at {{meetup.date}} &nbsp;on &nbsp; {{meetup.time}} - {{meetup.location}}.
          </div>
          <div>
          {{ meetup.description }}
          </div>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
          <v-btn color="red dark-1" to="/meetups/new">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup (){
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
