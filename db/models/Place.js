import mongoose from "mongoose";

// name
// "Elbphilharmonie"
// location
// "Hamburg"
// image
// "https://images.unsplash.com/photo-1553547274-0df401ae03c9?ixlib=rb-4.0…"
// mapURL
// "https://www.google.com/maps/place/Elbphilharmonie+Hamburg/@53.543085,9…"
// description
// "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi dol…"
const { Schema } = mongoose;

const placeSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place;
