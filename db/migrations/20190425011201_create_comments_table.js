
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', function (table) {
        table.increments('id').primary();
        table.string('comments', 255)
        table.date('create_date')
        
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('comments');
};
