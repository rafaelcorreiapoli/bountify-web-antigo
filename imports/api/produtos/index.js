if (Meteor.isServer) {
  import './server/publications'
}

import './methods'
import { attachSchema } from './schema'

attachSchema()
