import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  email: DS.attr(),
  category: DS.belongsTo('category', {async: true}),
  postTitle: DS.attr(),
  postBody: DS.attr(),
  createdAt: DS.attr()
});
