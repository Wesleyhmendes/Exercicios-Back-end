const express = require('express');
const { travelService } = require('./services');
const { passengerRoutes } = require('./routes');

const app = express();

app.use(express.json());
app.use('/passengers', passengerRoutes);

app.get('/drivers/open/travels', async (_req, res) => {
  const serviceResponse = await travelService.getOpenTravels();
  return res.status(200).json(serviceResponse.data);
});

app.patch('/drivers/:driverId/travels/:travelId', async (req, res) => {
  const { driverId, travelId } = req.params;
  
  const serviceResponse = await travelService.updateTravelStatus(driverId, travelId);
  
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(422).json(serviceResponse.data);
  }

  return res.status(200).json(serviceResponse.data);
});

module.exports = app;
