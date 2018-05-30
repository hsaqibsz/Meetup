import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
state: {
    loadedMeetups: [
        { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Kabul-Pano_By_Dani.jpg/640px-Kabul-Pano_By_Dani.jpg', id: 'kdkdkkd', title: 'Meetups in Kabul', time: '01-30', date: '2018-07-1', location: 'Kabul', description: "I have payed at Bakhtar Bank, Pule Surkh Branch, Kabul to Mr Mohammad Ali Hussainy's (102103100469032) Bank Account & sent receipt scanned version to alihussainy78@gmail.com and admissions@sau.int" },
        { imageUrl: 'http://mw2.google.com/mw-panoramio/photos/medium/92063458.jpg', id: 'kdkdkkdkkdkd', title: 'Meetups in Wardak', time: '01-30', date: '2018-07-2', location: 'Wardak', description: "I have payed at Bakhtar Bank, Pule Surkh Branch, Kabul to Mr Mohammad Ali Hussainy's (102103100469032) Bank Account & sent receipt scanned version to alihussainy78@gmail.com and admissions@sau.int" },
        { imageUrl: 'https://i.pinimg.com/originals/f3/ea/1f/f3ea1f716b37e9a25ca414f7bedc6660.jpg', id: 'kdkdkkdkkdkdjjjj', title: 'Meetups in Herat', time: '01-30', date: '2018-07-3', location: 'Herat', description: "I have payed at Bakhtar Bank, Pule Surkh Branch, Kabul to Mr Mohammad Ali Hussainy's (102103100469032) Bank Account & sent receipt scanned version to alihussainy78@gmail.com and admissions@sau.int" }
       
    ],
    user: {
        id: 'kdkdkkdkkd',
        registeredMeetups: ['kdkdkkdkkdkdjjjj']
    }
},
mutations: {
    createMeetup (state, payload) {
        state.loadedMeetups.push(payload)
    }
},
actions: {
    createMeetup ({commit}, payload) {
        const meetup = {
            title: payload.title,
            location: payload.location,
            imageUrl: payload.imageUrl,
            description: payload.description,
            date: payload.date,
            time: payload.time,
            id: 'dkkdkdkkdjdkdl'
        }
        //reach out to firbase and store it
        commit('createMeetup', meetup)
    }
},
 getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    }, 
featuredMeetups (state, getters) {
    return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) =>{
          return meetup.id === meetupId
          })
      }
    }
}
})
