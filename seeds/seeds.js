const mongoose = require("mongoose");
const Camper = require("../models/Camper.model");

require("../config/db.config");

const campersJson = require("./campersPack.json");

mongoose.connection.once("open", () => {
  console.info(
    `*** Connected to the database ${mongoose.connection.db.databaseName} ***`
  );

  mongoose.connection.db
    .dropDatabase()
    .then(() => {
      console.info("Db.config has been cleared");
    })
    .then(() => {
      campersJson.forEach((camper) => {
        Camper.create(camper).then((createdCamper) => {
          console.log(
            `Camper with camperSize ${createdCamper.category} has been created`
          );
        });
      });
    })
    .catch((err) => console.error(err));
});
