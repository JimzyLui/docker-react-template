const tableName = "tasks";
exports.up = function(knex, Promise) {
  return knex.schema.createTable(tableName, function(table) {
    table.increments("id");
    table.string("title", 25);
    table.integer("priority").default(3);
    table
      .string("status", 10)
      .notNullable()
      .default("pending");
    table.string("task", 100);
    table.string("createdBy", 50).default("unknown");
    table.string("assignedTo", 50).default("unassigned");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(tableName);
};
