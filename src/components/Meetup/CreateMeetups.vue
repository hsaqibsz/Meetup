<template>
    <v-container>
        <v-layout row  >
            <v-flex xs12 sm6  style="margin: 0 auto;">
                <h1 class="grey--text" >
                    create a new Meetup
                </h1>
                    <form @submit.prevent="onCreateMeetup">
                     <v-flex xs12>
                        <v-text-field
                        name="title"
                        label="Title"
                        id="title"
                        v-model="title"
                        required >
                        </v-text-field>
                     </v-flex>
                     <v-flex xs12>
                        <v-text-field
                        name="location"
                        label="Location"
                        id="location"
                        v-model="location"
                        required >
                        </v-text-field>
                     </v-flex>

                        <v-flex xs-12>
                            <img :src="imageUrl" style="max-width:200px; max-hight:150px; float:right;  border-radius: 5px;">
                        </v-flex>
                        <v-flex xs12>
                        <v-text-field
                        name="imageUrl"
                        label="Image Url"
                        id="imageUrl"
                        v-model="imageUrl"
                        required >
                        </v-text-field>
                        </v-flex>
                        <v-flex xs12>
                           <h1 class="grey--text"> Pick a Date & Time</h1>
                        </v-flex>
                        <v-flex xs12 mb-2>
                            <v-date-picker
                             v-model="date"
                             full-width
                             header-color="red darken-2"
                             landscape>
                            </v-date-picker>
                        </v-flex>
                         
                        <v-flex xs12>
                            <v-time-picker
                             v-model="time"
                             full-width
                             format="24hr"
                             header-color="red darden-2"
                             landscape
                             >
                            </v-time-picker>
                            <p>{{ time }}</p>
                        </v-flex>
                        <v-flex xs12>
                        <v-text-field
                        name="description"
                        label="Description"
                        id="description"
                        v-model="description"
                        required
                        multi-line >
                        </v-text-field>
                        </v-flex>
                        <v-flex xs7 sm-4>
                        <v-btn type="submit" class="primary" :disabled="!formIsValid">Save Meetup</v-btn>
                        </v-flex>
                    </form>
                </v-flex>
            </v-layout>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            title: '',
            location: '',
            imageUrl: '',
            description: '',
            date: '',
            time: new Date()

        }
    },
    computed: {
        formIsValid () {
            return this.title !== '' && 
            this.location !== '' && 
            this.imageUrl !== '' && 
            this.description !== '' &&
            this.date !== '' &&
            this.time !== ''
        }
    },
    methods: {
        onCreateMeetup () {
            const meetupdata = {
                 title: this.title,
                 location: this.location,
                 imageUrl: this.imageUrl,
                 description: this.description,
                 date: this.date,
                 time: this.time.toString()
            }
            this.$store.dispatch('createMeetup', meetupdata),
            this.$router.push('/meetups')
        }/* ,
        validDate() {
             const dates =  new date(this.date)
            console.log(dates)
        } */  
    }
}
</script>
