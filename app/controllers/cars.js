import Ember from 'ember';

export default Ember.ArrayController.extend({

    actions: {
        deleteCar: function() {
            this.model.findBy('name', 'Car2').deleteRecord();
            console.log("deleting!!!");
        },

        createCar: function() {
            this.store.createRecord('car', {
                name: 'Subaru',
                type: 'Imprezza',
                brand: 'Subaru'
            }).save().then((function(_this) {
                return function(car) {
                    return _this.addObject(car);
                };
            })(this));
        }
    }
});
