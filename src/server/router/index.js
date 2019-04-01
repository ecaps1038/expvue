var login = require('../model/login');

module.exports = function(app){
	
	//查询数据库信息
	app.post('/user',function(req,res){
		var from = req.body.firstName;
		var to = req.body.lastName;
		var context = {from,to};
		res.send({success:true,context});
	});	
	//用户登陆
	app.post('/login',function(req,res){
		var email = req.body.name;
		var pswd = req.body.psw;
		login.logIn(email,pswd,req,res);
		// res.send({success:true,context});
	});
	//首页验证
	app.get('/login',function(req,res){
		if(req.signedCookies.id){
			req.session.userId = req.signedCookies.id;
			req.session.username = req.signedCookies.username;
			req.session.imgurl = req.signedCookies.imgurl;
			var id = req.session.userId;
		    var myimgurl = req.session.imgurl;
		    var myname = req.session.username;
			res.send({success:true,id:id,myimgurl:myimgurl,myname:myname});
		}else if(req.session.userId){
			var id = req.session.userId;
			var myimgurl = req.session.imgurl;
		    var myname = req.session.username;
		    res.send({success:true,id:id,myimgurl:myimgurl,myname:myname});
		}else{
			//res.redirect('/');
		}
	});
	//用户退出
	app.get('/quit', function(req,res) {
        login.logout(req,res);
	});	
	//用户管理权限
	app.get('/manage', function(req,res) {
		if(req.session.userId){
			var myimgurl = req.session.imgurl;
			var myname = req.session.username;
			res.send({success:true,tep:1,myname:myname,myimgurl:myimgurl});
		}else{
			res.send({success:true,tep:0});
		}
	});	

}
