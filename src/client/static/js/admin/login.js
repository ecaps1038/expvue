export default {
	data () {
		return {
		  name: '',
		  psw: ''
		}
	},
    computed:{
		
	},
	methods:{
		submit: function(){
			if(this.name && this.psw){
				this.$axios.post('/login', {
				    name: this.name,
				    psw: this.psw
				})
				.then(function (response) {
					var tep = response.data.tep;
				    if(tep == 0){
						alert('tep=0');
					}else if(tep == 1){
						alert('tep == 1');
					}
				    //console.log(data);
				})
				.catch(function (error) {
				    console.log(error);
				    alert('aa')
				});
			}
		}
	}

}
