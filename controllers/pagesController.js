const model = require('../models')

exports.login = (req, res) => {
    let title = 'Login';
    res.render('login', { title })
}

exports.home = (req, res) => {
    let title = 'Dashboard', orderData;

    model.Order.findAll()
        .then(data => orderData = data)

    model.Car.findAll()
        .then(data => res.render('dashboard', { title, orderData, carData: data }))
}

exports.car = (req, res) => {
    const title = `List Cars`;
    res.render('car_list', { title })
}

exports.addCar = (req, res) => {
    const title = `Add New Car`;
    res.render('add_new_car', { title })
}