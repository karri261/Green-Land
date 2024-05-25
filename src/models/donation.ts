import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Project'
  },
  cardName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

const Donation = mongoose.model('Donation', donationSchema);
export { Donation };