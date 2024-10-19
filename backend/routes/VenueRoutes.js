var express = require('express');
var router = express.Router();
var VenueController = require('../controllers/VenueController.js');

/*
 * GET
 */
router.get('/', VenueController.list);

/*
 * GET
 */
router.get('/:id', VenueController.show);

/*
 * POST
 */
router.post('/', VenueController.create);

/*
 * PUT
 */
router.put('/:id', VenueController.update);

/*
 * DELETE
 */
router.delete('/:id', VenueController.remove);

module.exports = router;
