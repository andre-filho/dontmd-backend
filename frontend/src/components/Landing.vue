<template>
  <section class="">
    <b-container class="text-center">
      <h1>
        Dontmd
      </h1>
      <h2>
        {{ randomGreeting }}
      </h2>
      <b-row>
        <b-col md='8' offset-md="2" class="my-5">
          <b-input-group prepend="dontmd.com/">
            <b-form-input
              v-model="pagename"
              placeholder="Type the name of the page you want to create"/>
            <b-input-group-append>
              <b-button
                @click="createPage()"
                variant="secondary">
                Create
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </b-container>
    <h5 class="small text-muted text-center">
      Powered by Vue.js, Express and tons of coffee
    </h5>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      pagename: '',

      listOfGreetings: [
        'So, you\'re in a hurry huh',
        'Markdown on a budget',
        'Making your day great again',
        'Fast documentation for your git repo\'s wiki coming right up!',
        '"You are special, you can make it in time!" - Mom',
        'Markdown on the way',
        'Easy and simple... I was talking about md'
      ],

      attemptsOnBlankPage: 0
    }
  },

  computed: {
    randomGreeting: function () {
      return this.randomizeGreeting()
    }
  },

  methods: {
    randomizeGreeting () {
      return this.listOfGreetings[
        Math.floor(Math.random() * this.listOfGreetings.length)
      ]
    },

    createPage () {
      if (this.pagename === '' || this.pagename === null) {
        if (this.attemptsOnBlankPage < 6) {
          this.attemptsOnBlankPage++
          alert('Please give your page a name')
        } else {
          this.attemptsOnBlankPage = 0
          alert('Goddamn dude! Can\'t you read?! Name that fucking page!!!')
        }
      }

      // axios
      //   .post(process.env.HOST_ADDRESS + 'pages/')
      //   .then((res) => {
      //     if (res.status === 200) {
      //       // final statement should be a redirect to the created page

      //     }
      //   })
      //   .catch((err) => {

      //   })
    }
  }
}
</script>

<style scoped>
  section {
    padding: 5em 0;
  }

  .container {
    padding-top: 3em;
  }
</style>
