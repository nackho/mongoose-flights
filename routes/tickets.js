var express = require('express');
var router = express.Router();
const ticketsCtrl = require("../controllers/tickets");

//is this based off create CRUD for 1:M? Is that something I should have had from the start
router.post("/flights/:id/tickets", ticketsCtrl.create)
router.get("/tickets/new/:flightid", ticketsCtrl.new);
//what would have led me to get the proper pathway

module.exports = router;