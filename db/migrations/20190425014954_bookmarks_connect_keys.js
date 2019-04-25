
exports.up = function(knex, Promise) {
    return  knex.schema.table('bookmarks', function(table) {
      table.integer('note_id').unsigned()
      table.foreign('note_id').references('notes.id')
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      })
  };
  
  exports.down = function(knex, Promise) {
      return  knex.schema.table('bookmarks', function(table) {
             table.dropColumns('note_id', 'user_id'); 
       
        })
  };
  
