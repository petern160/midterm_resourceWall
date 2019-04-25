
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bookmarks', function (table) {
      table.increments('id').primary();
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('bookmarks');
};


