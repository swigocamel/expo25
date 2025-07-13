const { EntitySchema } = require("typeorm");

const Pavilion = new EntitySchema({
  name: "Pavilion",
  tableName: "pavilions",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
    status: {
      type: "varchar",
    },
    waitTime: {
      type: "int",
    },
    updatedAt: {
      type: "timestamp",
    },
  },
});

module.exports = { Pavilion };
