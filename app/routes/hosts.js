import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('http://127.0.0.1:3000')
  }
});
