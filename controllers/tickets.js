const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    create,
    new: newTicket,
};

function create(req, res) {
    //is there no flight property on req.body because we referenced the data from the Flight model? and then we create a req.body.flight to equal the flight ID of the ticket form we just added. then we use the ticket model to run create that acts on the form we added and some function, then redirect to the flight/flight id page
    req.body.flight = req.params.id
    Ticket.create(req.body, function(err, ticket) {
    res.redirect(`/flights/${flight._id}`)
    })
}

function newTicket(req, res) {
    res.render("tickets/new", {
        title: "New Ticket"
    })
}