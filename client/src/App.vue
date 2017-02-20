<template>
  <div id="app">
    <h1>Hacker Report</h1>
    <div class="search-wrapper">
      <input type="text" v-model="keyword" placeholders="Search Title..." />
    </div>
    <div class="wrapper">
      <div class="card" v-for="post in postList">
        <a v-bind:href="post.link" target="blank">
   <!--        <img v-bind:src="post.img" />
          <small>Posted by {{post.author}}</small> -->
          {{post.title}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
var topTen = [];

var stories = axios.get('http://localhost:8000/api/topstories')
  .then(function (response) {
    console.log('response.data', response.data);
    for (var i = 0; i < 10; i++) {
      var currentId = response.data[i];

      axios.get('https://hacker-news.firebaseio.com/v0/item/' + currentId + '.json?print=pretty')
        .then(function (response) {
          console.log('inner response', response)
          topTen.push(new Post(response.data.title, response.data.url))
          console.log('topTen', topTen)
        })
    }
  })
  .catch(function (error) {
    console.log(error);
  });


class Post {
  constructor(title, link) {
    this.title = title;
    this.link = link;
  }
}
export default {
  name: 'app',
  data () {
    return {
      keyword: 'javascript',
      postList: topTen
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.card {
  max-width: 124px;
}

img {
  height: 100px;
}

small {
  font-size: 10px;
  padding: 4px;
}


</style>
