exports.getCarrito = (req, res) => {
  const { id } = req.params;
  const query = "";
  try {
    return res.json({
      status: 200,
      message: "OK",
      data: query,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.postCarrito = (req, res) => {
  const query = "";
  try {
    return res.json({
      status: 200,
      message: "OK",
      data: query,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.deleteCarrito = (req, res) => {
  const query = "";
  try {
    return res.json({
      status: 200,
      message: "OK",
      data: query,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};
