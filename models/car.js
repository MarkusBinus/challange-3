// models/article.js 
const carData = [];

for (let index = 1; index <= 10; index++) {
    carData.push({
        No: index,
        Name: 'Name',
        Category: 'Category',
        Price: 'Price',
        StartRent: 'Start Rent',
        FinishRent: 'Finish Rent',
        CreatedAt: 'Created at',
        UpdatedAt: 'Updated at'
    })
}

module.exports = {
    findAll: () => Promise.resolve(carData)
};