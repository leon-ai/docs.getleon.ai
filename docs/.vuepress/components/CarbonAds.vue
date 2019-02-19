<template>
  <div class="carbon-ads"></div>
</template>

<script>
  export default {
    name: 'CarbonAds',
    props: [],
    data() {
      return {
      };
    },
    watch: {
      '$route' (to, from) {
        console.log('in-route');
        if (
          to.path !== from.path &&
          this.$el.querySelector('#carbonads')
        ) {
          this.$el.innerHTML = '';
          this.load();
        }
      }
    },
    computed: {
    },
    methods: {
      load () {
        const s = document.createElement('script');
        s.id = '_carbonads_js';
        s.src = `//cdn.carbonads.com/carbon.js?serve=CK7DC27N&placement=docsgetleonai`;
        this.$el.appendChild(s);
      }
    },
    mounted() {
      this.load();
    },
    components: {
    },
  };
</script>

<style lang="scss">
  .carbon-ads {
    padding: 1em;
    font-size: .75rem;
    border-radius: 4px;
    line-height: 16px;
    min-height: 102px;
    margin: 10px;
    margin-bottom: -.5rem;

    a {
      color: #444;
      font-weight: normal;
      display: inline;
    }

    .carbon-img {
      float: left;
      margin-right: 1rem;

      img {
        display: block;
      }
    }

    .carbon-poweredby {
      color: #999;
      display: block;
      margin-top: 0.5em;
    }
  }
  @media (max-width: 720px) {
    .carbon-ads {
      .carbon-img img {
        width: 100px;
        height: 77px;
      }
    }
  }
</style>
