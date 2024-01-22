import mongoose from 'mongoose';
import colors from 'colors';

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://sandeep123:sandeep1234@cluster0.gibwndn.mongodb.net/ecommerceApp?retryWrites=true&w=majority'

const connectDB = async (req,res) => {
    try {
        const conn = await mongoose.connect(MONGO_URI)
        console.log('connected to mongodb database.'.bgMagenta.white);
    } catch (error) {
        console.log(`Error in mongodb ${error}`.bgRed.white);
    }
}

export default connectDB;