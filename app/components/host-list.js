import Ember from 'ember';

export default Ember.Component.extend({
  allAreDoneObserver: Ember.observer('allAreDone', function() {
    let completeValue = this.get('allAreDone');
    if(completeValue) {
      $('#hosts :checkbox').each(function() {this.checked = true;});
    }
    else {
      $('#hosts :checkbox').each(function() {this.checked = false;});
    }
  }),
});
