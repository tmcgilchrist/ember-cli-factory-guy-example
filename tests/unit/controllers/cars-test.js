import Ember from 'ember';
import { test, moduleFor } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import carsFactory from 'ember-cli-factory-guy-example/tests/fixtures/car';

var App,
    testHelper,
    store,
    TestHelper = Ember.Object.createWithMixins(FactoryGuyTestMixin);


module('controller - CarsController', {
  setup: function() {
    App = startApp();
    testHelper = TestHelper.setup(App);
    store = testHelper.getStore();
  },
  teardown: function() {
    Ember.run(function() { testHelper.teardown();});
  }
});

// Replace this with your real tests.
test('it exists', function() {
  expect(2);
  var car = store.makeFixture('car', {name: 'Bowser Bike'});

  var controller =  App.__container__.lookup('controller:cars');
  ok(controller instanceof Ember.ArrayController);

  Ember.run(function() {
    controller.addObject(car);
  });

  andThen(function() {
    equal(controller.get('model').length, 1, "Should have 1 car.");
  });
});


test('it creates cars', function() {
  expect(1);
  var controller = App.__container__.lookup('controller:cars');
  Ember.run(function() {
      controller.send('createCar');
  });
  andThen(function() {
      equal(controller.get('model').length, 1, "Should have an extra car");
  });
});
