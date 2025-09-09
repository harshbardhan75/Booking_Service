'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn(
      'bookings','noofseats',{
        type :Sequelize.INTEGER,
        allowNull:false,
        defaultValue:1 
      }
    )

    await queryInterface.addColumn(
      'bookings','cost',{
        type :Sequelize.INTEGER,
        allowNull:false,
        defaultValue:0 
      }
    )


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     * 
     * 
     * 
     * 
     */

    await queryInterface.removeColumn('bookings','noofSeats');
    await queryInterface.removeColumn('bookings','cost');
  }
};
