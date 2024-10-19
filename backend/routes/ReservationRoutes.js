var express = require('express');
var router = express.Router();
var ReservationController = require('../controllers/ReservationController.js');

/*
 * GET
 */
router.get('/', ReservationController.list);

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
