import express from 'express';
import mongoose from 'mongoose';
import { Donation } from './models/donation';
import { Project } from './models/project';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000' 
}));

const mongoURI = 'mongodb://localhost:27017/Wildlife_Conservation_Website';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true } as mongoose.ConnectOptions)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

  app.post('/donate', async (req, res) => {
    const { projectId, amount, cardName } = req.body;
  
    try {
      const donation = new Donation({ projectId, amount, cardName });
      await donation.save();
      
      console.log(projectId)

      const project = await Project.findById(projectId);
      if (project) {
        project.totalDonations += amount;
        await project.save();
        res.status(201).send(donation);
      } else {
        res.status(404).send({ error: 'Project not found' });
      }
    } catch (err) {
      console.error('Error donating:', err);
      res.status(400).send({ error: 'Invalid donation data' });
    }
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.post('/donate', async (req, res) => {
//   console.log('Received a POST requƯest:', req.body);
// });

