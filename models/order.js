// models/article.js 
const orderData = [];

for (let index = 1; index <= 10; index++) {
    orderData.push({
        No: index,
        UserEmail: 'User Email',
        Car: 'Car',
        StartRent: 'Start Rent',
        FinishRent: 'Finish Rent',
        Price: 'Price',
        Status: 'Status'
    })
}

module.exports = {
    findAll: () => Promise.resolve(orderData)
};