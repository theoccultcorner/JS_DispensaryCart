import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  return this.store.findRecord('grower', params.grower_id);
},
});
