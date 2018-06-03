<template>
<v-container>
    <v-layout row wrap >
        <v-flex xs12 md8 offset-sm3>
            <v-card >
                <v-card-title>
            <h2>Sign Up</h2>
                </v-card-title>
        <v-card-text>
  <v-form  @submit.prevent="onSignUp" >
    <v-text-field
       
      :counter="10"
      label="Email"
      id="email"
      required
    ></v-text-field>
    <v-text-field
     
      :counter="6"
      label="Password"
      id="password"
      type="password"
      v-model="password"
      required
    ></v-text-field>
      <v-text-field
      :rules="[comparePasswords]"
      label="Confirm Password"
      id="confirmPassword"
      type="password"
      v-model="password"
    ></v-text-field>
    <v-btn type="submit" class="primary" >signUp</v-btn>
  </v-form>
        </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: '', 
            confirmPassword: ''
        }
    },
    methods: {
        onSignUp () {
            //vuex
            console.log ({email: this.email, password: this.password, confirmPassword: this.confirmPassword})
        }
    },
    computed: {
        comparePasswords () {
            return this.password !== this.confirmPassword ? 'passwords do not matched' : ''
        }
    }
}
</script>
