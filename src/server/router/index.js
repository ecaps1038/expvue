var login = require('../model/login');

module.exports = function(app){
	
	//查询数据库信息
	app.post('/user',function(req,res){
		var from = req.body.firstName;
		var to = req.body.lastName;
		var context = {from,to};
		res.send({success:true,context});
	});	
	app.post('/login',function(req,res){
		var email = req.body.name;
		var pswd = req.body.psw;
		login.logIn(email,pswd,req,res);
		// res.send({success:true,context});
	});
}
