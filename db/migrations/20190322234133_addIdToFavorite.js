
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('favorites', table => {
      table.integer("fav_id")
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('favorites', table => {
      table.dropColumn('fav_id')
    })
  ])
};
