//import express library
const express = require("express");

//initialize express server
const server = express();
const axios = require("axios");

// const cars = [
//   {
//     make: "Toyota",
//     model: "Mark X",
//     year: "2007",
//   },
//   {
//     make: "Nissan",
//     model: "March",
//     year: "2009",
//   },

//   {
//     make: "Honda",
//     model: "Civic",
//     year: "2014",
//   },
// ];

//default -use GET, return a string
server.get("/pokemon", async (req, res) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    const data = response.data;

    // sending the data received from the Pokemon API in the response
    res.send(data);
  }catch (error){
    console.log("Error fetching Pokemon API", error);
    res.status(500).send("An error ocurred while fetching data");
  }
});

//open up a port for server and start listening
server.listen(8000, () => {
  console.log("Server started and listening on port 8000, yeah!");
});
