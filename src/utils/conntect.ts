import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("Conntected to db");
  } catch (err) {
    logger.error("Could not conntect to db:", err);
    process.exit(1);
  }
}

export default connect;
