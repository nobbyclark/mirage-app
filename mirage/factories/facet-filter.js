import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name:      'Locale',
  notFilter: false,
  criteria:  ['en']
});
