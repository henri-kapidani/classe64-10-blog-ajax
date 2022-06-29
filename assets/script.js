new Vue({
	el: '#app',
	data: {
		posts: [],
	},
	created() {
		axios.get('http://localhost:8888/classe64-10-blog-ajax/api.php')
			.then(response => this.posts = response.data);
	}
})