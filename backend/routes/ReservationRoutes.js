var express = require('express');
var router = express.Router();
var ReservationController = require('../controllers/ReservationController.js');

/*
 * GET
 */
router.get('/', ReservationController.list);
router.get('/my-reservations', ReservationController.displayMyReservations);

/*
 * GET
 */
router.get('/:id', ReservationController.show);

/*
 * POST
 */
router.post('/', ReservationController.create);

/*
 * PUT
 */
router.put('/:id', ReservationController.update);

/*
 * DELETE
 */
router.delete('/:id', ReservationController.remove);

module.exports = router;
