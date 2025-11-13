const express = require("express");
const trafficRouter = express.Router();
const realtime = require("gtfs-rt-bindings");
const axios = require("axios");

// Vehicle Positions
trafficRouter.get("/", async (req, res) => {
  const response = await axios({
    method: "GET",
    url: "https://open-data.rtd-denver.com/files/gtfs-rt/rtd/VehiclePosition.pb",
    responseType: "arraybuffer",
  });
  try {
    const feed = realtime.FeedMessage.decode(response.data);
    res.status(200).send(feed);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

// Trip Updates
trafficRouter.get("/trip-updates", async (req, res) => {
  const response = await axios({
    method: "GET",
    url: "https://open-data.rtd-denver.com/files/gtfs-rt/rtd/TripUpdate.pb",
    responseType: "arraybuffer",
  });
  try {
    const feed = realtime.FeedMessage.decode(response.data);
    res.status(200).send(feed);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

// Route Alerts
trafficRouter.get("/alerts", async (req, res) => {
  const response = await axios({
    method: "GET",
    url: "https://open-data.rtd-denver.com/files/gtfs-rt/rtd/Alerts.pb",
    responseType: "arraybuffer",
  });
  try {
    const feed = realtime.FeedMessage.decode(response.data);
    res.status(200).send(feed);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

// Bus Trip Updates
trafficRouter.get("/bus-trip-updates", async (req, res) => {
  const response = await axios({
    method: "GET",
    url: "https://open-data.rtd-denver.com/files/gtfs-rt/cdot/Bustang_TripUpdate.pb",
    responseType: "arraybuffer",
  });
  try {
    const feed = realtime.FeedMessage.decode(response.data);
    res.status(200).send(feed);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

trafficRouter.get("/bus-positions", async (req, res) => {
  const response = await axios({
    method: "GET",
    url: "https://open-data.rtd-denver.com/files/gtfs-rt/cdot/Bustang_VehiclePosition.pb",
    responseType: "arraybuffer",
  });
  try {
    const feed = realtime.FeedMessage.decode(response.data);
    res.status(200).send(feed);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

module.exports = trafficRouter;
