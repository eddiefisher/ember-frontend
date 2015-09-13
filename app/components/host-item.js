import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  attributeBindings: ['styling:style'],
  styling: function() {
    return new Ember.Handlebars.SafeString("background-color: " + this.get('host.user_color'));
  }.property('styling')
});
