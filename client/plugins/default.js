//
// <Table Of Contents>
// *******************
//
// 1) _Require_
// 1.05) Connection
// 1.1) Directives
// 1.2) Methods
// 1.3) Mixins
// 1.4) Prototypes
// 1.5) General
// --------------------
// 2) _Vue.use_
// 2.1) Connection
// 2.2) Methods
// 2.3) Directives
// 2.4) Mixins
// 2.5) Prototypes
// 2.6) General
//
// ********************
// </Table Of Contents>
//

import Vue from 'vue'

//
// 1) _Require_
// ************

// 1.05) Connection
const _Connection           = require('./connection') // The most important plugin of this boilerplate. Connects to the FeathersJS side of the application
const _Forms                = require('./forms')

// 1.1) Directives
const _Authenticate         = require('./directives/authenticate') // v-update-authentication, which calls the authentication method in methods/authentication
const _Login                = require('./directives/login') // v-login
const _Logout				= require('./directives/logout') // v-logout
const _Register             = require('./directives/register') // v-register
const _Validate             = require('./directives/validate') // v-validate
const _Protected            = require('./directives/protected')

// 1.2) Methods
const _Storage              = require('./methods/storage')
const _Logger               = require('./methods/logger')
const _Authentication       = require('./methods/authentication') // This is automatic reauthentication plugin
const _Messages             = require('./methods/messages')
const _Regex                = require('./methods/regex')

// 1.3) Mixins
const _Data                 = require('./mixins/data')
const _Status               = require('./mixins/status')

// 1.4) Prototypes
const _Defaults             = require('./prototypes/defaults')

// 1.5) General
const _Material				= require('./general/material')

// Use the needed plugins

//
// 2) _Vue.use_
// ************

// 2.1) Connection
Vue.use(_Connection)
Vue.use(_Forms)

// 2.2) Methods
Vue.use(_Storage) // Storage
Vue.use(_Logger) // Logger method
Vue.use(_Regex) // Regex methods and functions
Vue.use(_Messages) // Messages objects
Vue.use(_Authentication) // The authentication method

// 2.3) Directives
Vue.use(_Authenticate) // v-update-authentication
Vue.use(_Login) // v-login
Vue.use(_Logout) // v-logout
Vue.use(_Register) // v-register
Vue.use(_Validate) // v-validate
Vue.use(_Protected) // v-protected

// 2.4) Mixins
Vue.use(_Data) // Global Vue data props
Vue.use(_Status) // Vuex localStorage status "middleware"

// 2.5) Prototypes
Vue.use(_Defaults) // Stuff to bind to "this"-keyword and methods/functions to run right away

// 2.6) General
Vue.use(_Material)
