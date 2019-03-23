
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('favorites', table => {
    table.string('genre')
  })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('favorites', table => {
      table.dropColumn('genre')
    })
  ])
};
