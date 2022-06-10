import mongoose from 'mongoose';
const { Schema } = mongoose;

const coinSchema = new Schema({
  name: String,
  color:   String,
  properties: [{ url: String, marketCap: Number, rise: Boolean }],
  rank: Number,
  volume: {
    lowestVolume: Number,
    highestVolume:  Number
  }
});

const coin = mongoose.model('coin', coinSchema);
export default coin