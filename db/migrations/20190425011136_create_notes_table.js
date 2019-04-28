
exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', function (table) {
        table.increments('id').primary();
        table.string('url', 255)
        table.string('img_url', 255)
        table.string('title')
        table.string('note_info', 255)
        table.integer('rating_counter')
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('notes');
};
