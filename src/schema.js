
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
const ClientModel = mongoose.model("clients", ClientScheme);
