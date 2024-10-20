var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
	'username' : String,
	'password' : String,
	'email' : String,
	'phone': String
});

UserSchema.statics.authenticate = async function(username, password){
	try {
		const user = await User.findOne({ username: username }).exec();

		if (!user) {
			const err = new Error("User not found");
			err.status = 401;
			throw err;
		}

		const result = await bcrypt.compare(password, user.password);
		console.log(result);
		if (result) {
			console.log('Password match successful for user:', user.username);
			return user; 
		} else {
			const err = new Error("Wrong password");
			err.status = 401;
			throw err;
		}
	} catch (err) {
		throw err; 
	}
};
	
UserSchema.pre('save', function(next) {
	var user = this;

	bcrypt.hash(user.password, SALT_WORK_FACTOR, function(err, hash) {
		if (err) return next(err);
		user.password = hash;
		next();
	});
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
