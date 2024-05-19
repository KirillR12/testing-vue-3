<template>
<article class="article">
    <div class="contentImg">
        <img :src="post.image" alt="" class="img"/>
    </div>
<div class="content">
    <div class="section">
        <h2>{{post.name}}</h2>
       <p>{{ post.status + ' - ' + post.species }}</p>
    </div>

   <div class="section">
       <h3>Last known location:</h3>
       <p>{{ post.location.name }}</p>
   </div>

   <div class="section">
       <h3>First seen in:</h3>
       <p>Земля (Замещающее измерение)</p>
   </div>
</div>
</article>
</template>

<script>
export default {
  props: {
    post: {
      location: Object,
      image: '',
      name: '',
      status: '',
      species: '',
      gender: '',
      url: '',
    },
  },
};

</script>

<style>
.section {
    -webkit-box-pack: start;
    justify-content: flex-start;

    height: 64px;
}

.content {
    display: flex;

    flex-direction: column;
    justify-content: space-between;

    flex: 3 1 0%;
    position: relative;
    padding: 0.75rem;
    color: rgb(255, 255, 255);
}

.contentImg {
flex: 2 1 0%;
width: 100%;
}

.article {
width: 600px;
height: 220px;
display: flex;
overflow: hidden;
background: rgb(60, 62, 68);
border-radius: 0.5rem;
margin: 0.75rem;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.img {
    width: 100%;
    height: 100%;
    margin: 0px;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;
}

h2 {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
}

h3 {
    font-size: 16px;
    font-weight: 500;
    padding: 0;
    margin: 0;
}

p {
    font-size: 16px;
    font-weight: 500;
    padding: 0;
    margin: 0;
}
</style>
