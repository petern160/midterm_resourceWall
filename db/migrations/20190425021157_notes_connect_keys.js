
exports.up = function(knex, Promise) {
    return  knex.schema.table('notes', function(table) {
      table.integer('category_id').unsigned()
      table.foreign('category_id').references('categories.id')
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      })
  };
  
  exports.down = function(knex, Promise) {
      return  knex.schema.table('notes', function(table) {
             table.dropColumns('category_id', 'user_id'); 
       
        })
  };
  
