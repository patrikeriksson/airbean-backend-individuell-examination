import { menuDb } from "../../config/db.js";

async function addProduct(req, res, next) {
  const { title, desc, price, preptime } = req.body;
  const newProduct = {
    title: title,
    desc: desc,
    price: price,
    preptime: preptime,
    createdAt: new Date(),
  };
  menuDb.insert(newProduct);
  res.status(200).send(`${title} added to the menu`);
}

async function updateProduct(req, res, next) {
  const { productId, title, desc, price, preptime } = req.body;
  const product = await menuDb.findOne({ _id: productId });

  const updatedTitle = title ? title : product.title;
  const updatedDesc = desc ? desc : product.desc;
  const updatedPrice = price ? price : product.price;
  const updatedPreptime = preptime ? preptime : product.preptime;

  menuDb.update(
    { _id: productId },
    {
      $set: {
        title: updatedTitle,
        desc: updatedDesc,
        price: updatedPrice,
        preptime: updatedPreptime,
        modifiedAt: new Date(),
      },
    }
  );
  res.status(200).send(`Product with id ${productId} has been updated`);
}

async function deleteProduct(req, res, next) {
  const { productId } = req.body;
  menuDb.remove({ _id: productId });
  res.status(200).send(`Product with id ${productId} has been deleted`);
}

export { addProduct, updateProduct, deleteProduct };
