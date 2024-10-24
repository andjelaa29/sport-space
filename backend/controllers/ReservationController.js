var ReservationModel = require('../models/ReservationModel.js');
var VenueModel = require('../models/VenueModel.js');

module.exports = {

    /**
     * ReservationController.list()
     */
    list: async function (req, res) {
        try {
            const Reservations = await ReservationModel.find();
            return res.json(Reservations);
        } catch(err) {
            return res.status(500).json({
                message: 'Error when getting Reservation.',
                error: err
            });
        }
    },
    displayMyReservations: async function (req, res) {
        const userId = req.user.id; 
        
        try {
          const reservations = await ReservationModel.find({user_id: userId}).populate('venue_id', 'name'); // display name from Venue model
          res.json(reservations);
        } catch (err) {
          console.error(err);
          res.status(500).send('Server error');
        }
      },
      

    /**
     * ReservationController.show()
     */
    show: async function (req, res) {
        try {
            const id = req.params.id;
            const Reservation = await ReservationModel.findOne({ _id: id });
            
            if (!Reservation) {
                return res.status(404).json({
                    message: 'No such Reservation'
                });
            }

            return res.json(Reservation);
        } catch (err) {
            return res.status(500).json({
                message: 'Error when getting Reservation.',
                error: err
            });
        }
    },

    /**
     * ReservationController.create()
     */
    create: async function (req, res) {
        try {
            const Reservation = new ReservationModel({
                venue_id: req.body.venue_id,
                user_id: req.body.user_id,
                date: req.body.date.trim(),
                start_time: req.body.start_time,
                end_time: req.body.end_time
            });
            const savedReservation = await Reservation.save();

            const { venue_id, date, start_time, end_time } = req.body;

            // delete available_slots from Venue
            const result = await VenueModel.updateOne(
                { _id: venue_id, 'availability.date': date },
                { $pull: { 'availability.$.available_slots': { start_time, end_time } } }
            );

            return res.status(201).json(savedReservation);
        } catch (err) {
            console.error(err); 
            return res.status(500).json({
                message: 'Error when creating Reservation',
                error: err,
            });
        }
    },

    /**
     * ReservationController.update()
     */
    update: async function (req, res) {
        try {
            const id = req.params.id;
            const Reservation = await ReservationModel.findOne({ _id: id });

            if (!Reservation) {
                return res.status(404).json({
                    message: 'No such Reservation'
                });
            }

            Reservation.venue_id = req.body.venue_id || Reservation.venue_id;
            Reservation.user_id = req.body.user_id || Reservation.user_id;
            Reservation.date = req.body.date || Reservation.date;
            Reservation.start_time = req.body.start_time || Reservation.start_time;
            Reservation.end_time = req.body.end_time || Reservation.end_time;

            const updatedReservation = await Reservation.save();
            return res.json(updatedReservation);
        } catch (err) {
            return res.status(500).json({
                message: 'Error when updating Reservation.',
                error: err
            });
        }
    },

    /**
     * ReservationController.remove()
     */
    remove: async function (req, res) {
        try {
            const id = req.params.id;
            await ReservationModel.findByIdAndRemove(id);
            return res.status(204).json();
        } catch (err) {
            return res.status(500).json({
                message: 'Error when deleting the Reservation.',
                error: err
            });
        }
    }
};
