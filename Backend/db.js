const mongoose = require('mongoose');

const uri = "mongodb+srv://muskanjhamani:Muskan1157@fooddeliverywebsite.o02y1kf.mongodb.net/FoodDeliveryWebsite?retryWrites=true&w=majority";

async function logAllData() {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Verify successful connection
        mongoose.connection.on('connected', () => {
            console.log('Connected to MongoDB database.');
        });

        // Access the MongoDB collection directly
        const collectionName = 'food_items'; // Replace 'your-collection' with the name of your collection
        const collection = mongoose.connection.db.collection(collectionName);
 
        // Fetch all documents from the collection
        global.food_items = await collection.find({}).toArray();

        // Log the data
        console.log('All data in the collection:');
        console.log(global.food_items);
        
        const foodCategoryCollection = mongoose.connection.db.collection('foodCategory');

        // Fetch all documents from the collection
        global.foodCategory = await foodCategoryCollection.find({}).toArray();

        // Log the data
        console.log('All data in the collection:');
        console.log(global.foodCategory);

        // Close the MongoDB connection
        // mongoose.connection.close();
    } catch (err) {
        console.error('Error while logging data:', err);
    }
}

// Call the function to log all data
module.exports = logAllData();
