const ClothTable = require("../model/ClothModel");

exports.GetDataOfCloth = async (req, res) => {
  console.log("i got clicked");
  try {
    const data = await ClothTable.find();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log("fetching error data", error);
    res.status(500).json({ message: "an internal server error occur" });
  }
};

exports.SearchCloth = async (req, res) => {
  try {
    const query = req.query.q;
    const results = await ClothTable.find({
      name: { $regex: query, $options: "i" },
    });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "an internal server error occured" });
  }
};
