var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var AvailabilitySchema = new Schema({
    date: Date,
    available_slots: [
        {
            start_time: String, 
            end_time: String,   
        }
    ]
});

var VenueSchema = new Schema({
	'name' : String,
	'city' : String,
	'sport' : [String],
	'capacity' : Number,
	'type' : String,
	'description' : String,
	'availability' : [AvailabilitySchema]
});

module.exports = mongoose.model('Venue', VenueSchema);
