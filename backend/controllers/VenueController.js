var VenueModel = require('../models/VenueModel.js');

/**
 * VenueController.js
 *
 * @description :: Server-side logic for managing Venues.
 */
module.exports = {

    /**
     * VenueController.list()
     */
    list: async function (req, res) {
        try {
            const Venues = await VenueModel.find();
            return res.json(Venues);
        } catch(err) {
            return res.status(500).json({
                message: 'Error when getting Venue.',
                error: err
            });
        }
       
    },

    /**
     * VenueController.show()
     */
    show: async function (req, res) {
        try {
            var id = req.params.id;

            const Venue = await VenueModel.findOne({_id: id});


            if (!Venue) {
                return res.status(404).json({
                    message: 'No such Venue'
                });
            }

            return res.json(Venue);

        } catch(err) {
            return res.status(500).json({
                message: 'Error when getting Venue.',
                error: err
            });
        }
    },

    /**
     * VenueController.create()
     */
    create: async function (req, res) {
        try {
            const sports = Array.isArray(req.body.sport) ? req.body.sport : [req.body.sport];

            var Venue = new VenueModel({
                name : req.body.name,
                city : req.body.city,
                sport : sports,
                capacity : req.body.capacity,
                type : req.body.type,
                description : req.body.description,
                availability : req.body.availability
            });

            const savedVenue = await Venue.save();
            return res.status(201).json(savedVenue);
            
        } catch(err) {
            return res.status(500).json({
                message: 'Error when creating Venue',
                error: err
            });
        }
    },

    /**
     * VenueController.update()
     */
    update: async function (req, res) {
        var id = req.params.id;

        try {
            const Venue = await VenueModel.findOne({_id: id});

            if (!Venue) {
                return res.status(404).json({
                    message: 'No such Venue'
                });
            }

            Venue.name = req.body.name ? req.body.name : Venue.name;
            Venue.city = req.body.city ? req.body.city : Venue.city;
            Venue.sport = req.body.sport ? req.body.sport : Venue.sport;
            Venue.capacity = req.body.capacity ? req.body.capacity : Venue.capacity;
            Venue.type = req.body.type ? req.body.type : Venue.type;
            Venue.description = req.body.description ? req.body.description : Venue.description;
            Venue.availability = req.body.availability ? req.body.availability : Venue.availability;
                
            const updatedVenue = Venue.save();
            return res.json(updatedVenue);

        } catch(err) {
            return res.status(500).json({
                message: 'Error when getting Venue',
                error: err
            });
        }
    },

    /**
     * VenueController.remove()
     */
    remove: async function (req, res) {
        var id = req.params.id;

        try {
            const deletedVenue = await VenueModel.findByIdAndRemove(id);
            if (!deletedVenue) {
                return res.status(404).json({
                    message: 'No such Venue to delete'
                });
            }
            return res.status(204).json();
        } catch(err) {
            return res.status(500).json({
                message: 'Error when deleting the Venue.',
                error: err
            });
        }
    }
};
