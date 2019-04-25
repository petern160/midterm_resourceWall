
exports.up = function(knex, Promise) {
    return knex.schema.createTable('categories', function (table) {
        table.increments('id').primary();
        table.string('title')
        table.string('info')
        
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categories');
};
