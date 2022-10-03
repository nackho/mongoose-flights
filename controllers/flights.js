const Flight = require("../models/flight")

module.exports = {
    new: newFlights,
    create,
    index,
};

function newFlights(req, res) {
    res.render("flights/new");
}

function create(req,res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect("/flights/new");
        console.log(flight)
        res.redirect("/flights");
    });
}

function index(req,res) {
    Flight.find({}, function(err, flights) {
        res.render("flights/index", {
            flights
        })
    })
}