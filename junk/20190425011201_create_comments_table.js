
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', function (table) {
        table.increments('id').primary();
        table.integer('note_id').unsigned()
        table.foreign('note_id')
        table.integer('user_id').unsigned()
        table.foreign('user_id')
        table.string('comments', 255)
        table.date('create_date')
        
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('comments');
};
