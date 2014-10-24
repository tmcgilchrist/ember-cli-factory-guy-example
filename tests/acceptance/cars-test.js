import Ember from 'ember';
import startApp from '../helpers/start-app';
import carsFactory from 'ember-cli-factory-guy-example/tests/fixtures/car';

var App,
    testHelper,
    store,
    TestHelper = Ember.Object.createWithMixins(FactoryGuyTestMixin);

module('Acceptance: Cars', {
  setup: function() {
    App = startApp();
    testHelper = TestHelper.setup(App);
    store = testHelper.getStore();
    store.makeList('car', 4);
  },
  teardown: function() {
    Ember.run(function () {
      testHelper.teardown();
    });
    Ember.run(App, 'destroy');
  }
});

test('Index', function() {
  expect(3);

  visit('/');

  andThen(function() {
    equal($('.cars li').length, 4);
    equal($('.cars li:first').text(), "Toyota Car1");
    equal($('.cars li:last').text(), "Toyota Car4");
  });
});

test('Delete', function() {
  expect(2);

  visit('/');
  andThen(function() {
    equal($('.cars li').length, 4, "Starting with 4 cars");
  });
  click('.delete-car');

  andThen(function() {
    equal($('.cars li').length, 3, "Should be 3 after deleting one.");
  });
});

test('Create', function() {
    expect(1);

    visit('/');

    click('.create-car');

    andThen(function() {
        equal($('.cars li').length, 5);
    });
});
