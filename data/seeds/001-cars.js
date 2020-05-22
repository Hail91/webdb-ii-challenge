
exports.seed = function(knex) {

  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: '254FA76KIY55GF45J',
          make: 'Chevrolet',
          model: 'Corvette',
          mileage: 32154,
          transmission: 'Automatic',
          title: 'clean'
        },
        {
          vin: '167GHY89KK73DFG86',
          make: 'Ford',
          model: 'Mustang',
          mileage: 16754,
          transmission: 'Automatic',
          title: 'clean'
        },
        {
          vin: 'GH984GFE45GYE37J8',
          make: 'Chevrolet',
          model: 'Equinox',
          mileage: 27654,
          transmission: 'Automatic',
          title: 'clean'
        }
      ]);
    });
};
