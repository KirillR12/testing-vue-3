<template>
    <div v-for="post in posts" :key="post.id">
        <CardItem :post="post"/>
    </div>
</template>

<script>
import CardItem from '../CardItem/CardItem.vue';

export default {
  components: {
    CardItem,
  },

  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character/?page=1').then((res) => res.json());

        this.posts = response.result;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

    <style>

    </style>
