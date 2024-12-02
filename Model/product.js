module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("ProductV3", {
    productId: {
      Type: DataTypes.STRING,
      primaryKey: true,
    },
    productName: {
      Type: DataTypes.STRING,
    },
    productImageName: {
      Type: DataTypes.STRING,
    },
    productImageURL: {
      Type: DataTypes.STRING,
    },
    brandName: {
      Type: DataTypes.STRING,
    },
    description: {
      Type: DataTypes.STRING,
    },
    itemCode: {
      Type: DataTypes.INTEGER,
    },
    itemType: {
      Type: DataTypes.STRING,
    },
    currency: {
      Type: DataTypes.STRING,
    },
    currencyCode: {
      Type: DataTypes.INTEGER,
    },
    saleAmount: {
      Type: DataTypes.INTEGER,
    },
    brochureFileName: {
      Type: DataTypes.STRING,
    },
    brochureFileURL: {
      Type: DataTypes.STRING,
    },
    vendors: {
      Type: DataTypes.STRING,
    },
    status: {
      Type: DataTypes.STRING,
    },
    createdBy: {
      Type: DataTypes.STRING,
    },
    subCategoryId: {
      Type: DataTypes.STRING,
    },
    categoryId: {
      Type: DataTypes.STRING,
    },
    uomId: {
      Type: DataTypes.STRING,
    },
    shippingMethodId: {
      Type: DataTypes.STRING,
    },
    shippingTermsId: {
      Type: DataTypes.INTEGER,
    },
    paymentTermsId: {
      Type: DataTypes.STRING,
    },
    categoryName: {
      Type: DataTypes.STRING,
    },
    organisationId: {
      Type: DataTypes.INTEGER,
    },
    vendorInfo: {
      Type: DataTypes.STRING,
    },
  });

  return Product;
};
