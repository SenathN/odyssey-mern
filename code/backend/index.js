const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); //cors origin
app.use(express.json());
const mongoose = require('mongoose');
// mongoose.set('strictQuery', false); 
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('ITP Backend API Running');
})

connectMongoDB().then(() => console.log("MongoDB connected")).catch(err => console.log(err));

async function connectMongoDB() {
  // await mongoose.connect('mongodb+srv://ITPDB:ITPDB@cluster0.zbkw8pu.mongodb.net/?retryWrites=true&w=majority');
  await mongoose.connect('mongodb+srv://sen:sinister177demon@cluster0.kelle48.mongodb.net/OddyseyDB?retryWrites=true&w=majority');
}

app.use('/api/ticket', require('./route/ticket.route'));
app.use('/api/tour', require('./route/tour.route'));
app.use('/api/inquiry', require('./route/inquiry.route'));
app.use('/api/guidepackage', require('./route/guidePack.route'));
app.use('/api/guide', require('./route/guide.route'));
app.use('/api/spaceProvider', require('./route/spaceProvider.route'));
app.use('/api/space', require('./route/space.route'));
app.use('/api/user', require('./route/user.route'));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})