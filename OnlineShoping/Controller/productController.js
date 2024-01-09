const productDB = require("../Model/productModel");
const hbs = require("hbs");

let count = 1;
hbs.registerHelper("count", () => {
  return count++;
});

exports.getHomepage = async (req, res) => {
  count = 1;

  if (req.query.sort === "true") {
    const data = await productDB.find().sort({ _id: -1 });
    res.render("home", { data });
  } else {
    const data = await productDB.find();
    res.render("home", { data });
  }
};

exports.addProducts = async (req, res) => {
  const { productName, price, discount, quantity, description } = req.body;

  const addProduct = new productDB({
    productName,
    price,
    discount,
    quantity,
    description,
  });

  await addProduct.save();

  res.redirect("home");
};

exports.sortProducts = async (req, res) => {
  count = 1;
  const data = await productDB.find().sort({ _id: -1 });

  res.render("home", { data });
};

exports.getEditPage = async (req, res) => {
  const data = await productDB.findById(req.params.id);

  res.render("editProduct", { data });
};

exports.updateProduct = async (req, res) => {
  const result = await productDB.findByIdAndUpdate(req.body.id, req.body);

  console.log(result);
  res.redirect("home");
};

exports.deleteProduct = async (req, res) => {
  const deltedProduct = await productDB.findByIdAndUpdate(req.params.id);

  console.log(deltedProduct);

  res.redirect("/home");
};
