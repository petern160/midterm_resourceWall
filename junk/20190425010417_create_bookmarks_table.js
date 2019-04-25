
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bookmarks', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned()
      table.foreign('user_id')
      table.integer('note_id').unsigned()
      table.foreign('note_id')
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('bookmarks');
};


