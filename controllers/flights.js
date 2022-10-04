const Flight = require("../models/flight")

module.exports = {
    new: newFlights,
    create,
    index,
    show,
};

function newFlights(req, res) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
        departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
        res.render('flights/new', {
            title: "New Flight", departsDate });
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
            title: "All Flights", flights
        })
    })
}

function show(req,res) {
    Flight.findById(req.params.id, function(err,flight){
        res.render("flights/show", {
            title: "Flight Details", flight
        })
    })
}