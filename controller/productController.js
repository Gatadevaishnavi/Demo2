//get get product

const { Op } = require("sequelize");
const Product = require("../Model/product");
const Vendor = require("../Model/vendor");
const product = require("../Model/product");

const getProduct = async (req, res) => {
  try {
    const {
      currentPage = 1,
      pageSize = 10,
      OrderBY = "createAt",
      orderDir = "desc",
      searchBy = "",
      searchField = "",
    } = req.query;
    const searchFieldArray = searchField ? searchField.slit(",") : [];
    const offset = (currentPage - 1) * pageSize;

    const whereCluse = searchBy
      ? {
          [Op.or]: searchFieldArray.map((field) => ({
            [field]: { [Op.like]: `%${searchBy}%` },
          })),
        }
      : {};

    const { row, count } = await Product.findAndConutAll({
      where: whereCluse,
      include: {
        Model: Vendor,
        as: "vendor",
        attributes: ["VendorOrganizationId,CompanyName,OrganizationLogoUrl"],
      },
      order: [[OrderBY, orderDir.toUpperCase()]],
      limit: +pageSize,
      offset,
    });

    // const product = await Product.find();

    res.json({
      currentPage: +currentPage,
      pageSize: +pageSize,
      totalpages: Math.ceil(count.pageSize),
      totalCount: count,
      data: row,
      // product,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = getProduct;
