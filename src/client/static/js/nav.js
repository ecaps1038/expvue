export default {
	data () {
		return {
		    note: {
			backgroundImage: "url(" + require("../images/logo1.svg") + ") ",
			backgroundPosition: "center center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
        },
			id: '',
			name: '',
			imgurl: '',	
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
		},
		login: function(){
        	var _this = this;
        	_this.$axios.get('/login',{})
        	.then(function (response) {
				var data = response.data;
			    //_this.name = data.myname;
			    alert(data.myname)
			})
			.catch(function (error) {
			    console.log(error);
			    alert('aa')
			});
        }
	},
	mounted:function(){this.login();},

}
