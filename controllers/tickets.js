const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    create,
    new: newTicket,
    addToFlight,
};

function create(req, res) {
    req.body.flight = req.params.id
    Ticket.create(req.body, function(err, ticket) {
    res.redirect(`/flights/${req.params.id}`)
    })
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render("tickets/new", {
            title: "New Ticket", flight
         })
    })
}
function addToFlight(req, res){
    Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flight: flight._id}, function(err, tickets){
            res.redirect(`/flights/${flight._id}`)
            flight.save(function(err){
                res.redirect(`/flights/${flight._id}`)
        })
        
        })
    })
}
