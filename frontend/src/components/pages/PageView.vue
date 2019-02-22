<template>
  <section>
    <Navbar/>
    <b-container fluid="" class="mt-4">
      <b-row>
        <b-col md='6'>
          <!-- editor -->
          <b-form-textarea
            type="text"
            placeholder="Enter markdown"
            v-model="content"
            rows="23"
            />
        </b-col>
        <b-col md='6'>
          <!-- preview -->
          <pre class="markdown" v-html="renderedMd"></pre>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar'
import marked from 'marked'

export default {
  components: {
    Navbar
  },

  data () {
    return {
      content: '',
      placeholder: '### Your md will be rendered here'
    }
  },

  computed: {
    renderedMd () {
      if (this.content === '') {
        return marked(this.placeholder)
      }
      return marked(this.content)
    }
  },

  methods: {

  }

}
</script>

<style scoped>
  .markdown {
    word-wrap: break-word !important;
  }

  .container-fluid {
    min-height: 80vh;
  }

  textarea.form-control, pre.markdown {
    height: 100% !important;
  }

  pre.markdown {
    font-size: .9em;
  }
</style>
