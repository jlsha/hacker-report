import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

new Vue({
  el: '#app',
  methods: {
    toggleOnOff() {
    	this.onOff = !this.onOff;
    }
  },
  computed: {
		filteredList() {
			return this.postList.filter((post) => {
  			return post.title.includes(this.keyword)
			})
		}
	},
	render: h => h(App)
});

