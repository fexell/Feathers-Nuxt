//
// <Table Of Contents>
// *******************
//
// 1) _Require_
// 2.05) Connection
// 2.1) Directives
// 2.2) Methods
// 2.3) Mixins
// 2.4) Prototypes
// --------------------
// 2) _Vue.use_
// 2.1) Connection
// 2.2) Methods
// 2.3) Directives
// 2.4) Mixins
// 2.5) Prototypes
//
// ********************
// </Table Of Contents>
//

import Vue from 'vue'

//
// 1) _Require_
// ************

// 2.05) Connection
const _Connection           = require('./connection')

// 2.1) Directives
const _Authenticate         = require('./directives/authenticate')
const _Login                = require('./directives/login')
const _Register             = require('./directives/register')
const _Validate             = require('./directives/validate')

// 2.2) Methods
const _Logger               = require('./methods/logger')
const _Authentication       = require('./methods/authentication')
const _Messages             = require('./methods/messages')
const _Regex                = require('./methods/regex')

// 2.3) Mixins
const _Data                 = require('./mixins/data')
const _Status               = require('./mixins/status')

// 2.4) Prototypes
const _Defaults             = require('./prototypes/defaults')

// Use the needed plugins

//
// 2) _Vue.use_
// ************

// 2.1) Connection
Vue.use(_Connection)

// 2.2) Methods
Vue.use(_Logger) // Logger method
Vue.use(_Regex) // Regex methods and functions
Vue.use(_Messages) // Messages objects
Vue.use(_Authentication) // The authentication method

// 2.3) Directives
Vue.use(_Authenticate) // v-update-authentication
Vue.use(_Login) // v-login
Vue.use(_Register) // v-register
Vue.use(_Validate) // v-validate

// 2.4) Mixins
Vue.use(_Data) // Global Vue data props
Vue.use(_Status) // Vuex localStorage status "middleware"

// 2.5) Prototypes
Vue.use(_Defaults) // Stuff to bind to "this"-keyword and methods/functions to run right away
