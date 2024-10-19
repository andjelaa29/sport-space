var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ReservationSchema = new Schema({
	'venue_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Venue'
	},
	'user_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'date' : String,
	'start_time' : String,
	'end_time' : String
});

module.exports = mongoose.model('Reservation', ReservationSchema);
