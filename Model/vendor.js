const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define("Vendor", {
    VendorOrganizationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    CompanyName: {
      type: DataTypes.STRING,
      primaryKey: true,
    },

    OrganizationLogoUrl: {
      type: DataTypes.STRING,
    },
    OrganizationLogoName: {
      type: DataTypes.STRING,
    },
  });
  return Vendor;
};
