function status(request, response) {
  response.status(200).json({ message: "pão" });
}

export default status;
