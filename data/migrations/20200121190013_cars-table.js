
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    // id column, integer, primary key, auto-increment

    table.increments();

    table.string('vin', 17).index();

    table.string('make').index();

    table.string('model').index();

    table.integer('mileage')

    table.string('transmission', 255).index();

    table.string('title').index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
