export default {
	data () {
		return {
		    note: {
          backgroundImage: "url(" + require("../images/logo1.svg") + ") ",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        },
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
