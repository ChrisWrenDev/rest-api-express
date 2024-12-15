import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("Conntected to db");
  } catch (err) {
    console.error("Could not conntect to db:", err);
    process.exit(1);
  }
}

export default connect;
