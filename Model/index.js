const Sequelize = require("sequelize");
const sequelize = require("../config/dbconnect");
const product = require("./product");
const vendor = require("./vendor");
// const sequelize = require("../config/dbConnect");

const Product = require("./product")(sequelize, Sequelize.DataTypes);
const Vendor = require("./vendor")(sequelize, Sequelize.DataTypes);

Product.hasmany(Vendor, { foreignKey: productId, as: "vendors" });
Vendor.belongsTo(Product, { foreignKey: "productId" });

module.exports = { sequelize, Product, Vendor };
