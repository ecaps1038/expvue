export default {
	data () {
		return {
		  // note: changing this line won't causes changes
		  // with hot-reload because the reloaded component
		  // preserves its current state and we are modifying
		  // its initial state.
		  msg: 'Hello World!'
		}
	},
    computed:{
		
	},
	methods:{
		aaa: function(){
			alert('aaa');
			this.$axios.post('/user', {
			    firstName: 'Fred',
			    lastName: 'Flintstone'
			})
			.then(function (response) {
				var data = response.data.context.from;
			    //console.log(response);
			    console.log(data)
			})
			.catch(function (error) {
			    console.log(error);
			    alert('aa')
			});
		}
	}

}
