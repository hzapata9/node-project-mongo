import { connect } from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  await connect("mongodb://root:root@127.0.0.1:27017/corfo_db");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  const kittySchema = new mongoose.Schema({
    name: String,
  });

  const Kitten = mongoose.model("Kitten", kittySchema);

  const silence = new Kitten({ name: "Silence" });
  console.log(silence.name); // 'Silence'
}
