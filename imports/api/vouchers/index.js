import publications from './server/publications'
import methods from './methods'
import { attachSchema } from './schema'

export default function() {
  Meteor.isServer && publications()
  //methods()
  attachSchema()
}
