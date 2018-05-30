<template>
<v-container>
    <v-layout row wrap >
        <v-flex xs12 md8 offset-sm3>
            <v-card >
                <v-card-title>
            <h2>Sign Up</h2>
                </v-card-title>
        <v-card-text>
  <v-form v-model="valid">
    <v-text-field
      :rules="nameRules"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-btn class="primary">Ok</v-btn>
  </v-form>
        </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>