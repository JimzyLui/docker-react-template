const tableName = 'tasks';
exports.up = function(knex, Promise) {
  return knex.schema.createTable(tableName, function(table){
    table.increments('key');
    table.string('title',50);
    table.integer('priority').default(3);
    table.string('task',50);
    table.string('createdBy',100);
    table.string('assignedTo',100).default('unassigned');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(tableName);
};
