const mongoose = require("mongoose");
const Camper = require("../models/Camper.model");
const Extra = require("../models/Extra.model");

require("../config/db.config");

const campersJson = require("./campersPack.json");

const extrasJson = require("./extrasPack.json");

mongoose.connection.once("open", () => {
  console.info(
    `*** Connected to the database ${mongoose.connection.db.databaseName} ***`
  );

  mongoose.connection.db
    .dropCollection("campers")
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
    .then(() => {
      extrasJson.forEach((extra) => {
        Extra.create(extra).then((createdExtra) => {
          console.log(`Extra with name ${createdExtra.name} has been created`);
        });
      });
    })
    .catch((err) => console.error(err));
});
