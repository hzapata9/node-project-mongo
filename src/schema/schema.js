import mongoose from "mongoose";


const ClientScheme = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    street: String,
    city: String,
    zipcode: Number,
  },
});
export const ClientModel = mongoose.model("clients", ClientScheme);

//export default ClientModel;
