
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function () {
      return Promise.all([
        knex('favorites').insert({title: "Jimmy and the Jets", artist: "Silvertron"}),
        knex('favorites').insert({title: "C.R.E.A.M.", artist: "WU TANG CLAN"})
      ])
    });
};
