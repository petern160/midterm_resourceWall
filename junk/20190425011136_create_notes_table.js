
exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', function (table) {
        table.increments('id').primary();
        table.integer('category_id').unsigned()
        table.foreign('category_id')
        table.integer('user_id').unsigned()
        table.foreign('user_id')
        table.string('url', 255)
        table.string('img_url', 255)
        table.string('title')
        table.integer('rating_counter')
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('notes');
};
