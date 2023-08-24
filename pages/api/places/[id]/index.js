import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Place";
export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    const place = await Place.findById(id);
    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(place);
  }
      if (request.method === "PUT") {
      const placeToUpdate = await Place.findByIdAndUpdate(id, request.body);
      // Find the joke by its ID and update the content that is part of the request body!
      response.status(200).json(placeToUpdate);
      console.log("placetoupdate",placeToUpdate)
      // If successful, you'll receive an OK status code.
    }

    if (request.method === "DELETE") {
      const placeToDelete = await Place.findByIdAndDelete(id);
      // Declare jokeToDelete to be the joke identified by its id and delete it.
      // This line handles the entire deletion process.
      response.status(200).json(placeToDelete);
    }
}
