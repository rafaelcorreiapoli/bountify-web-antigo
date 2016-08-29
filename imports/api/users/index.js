import { attachSchema } from './schema'

if (Meteor.isServer) {
  import './server/publications'
}

import './methods'


attachSchema()
