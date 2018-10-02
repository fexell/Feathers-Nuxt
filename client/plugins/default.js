//
// Table Of Contents:
// ******************
// 1) Require
// 2) Vue.use
//
//

import Vue from 'vue'

// 1) Require

// Plugins folder
const _Connection           = require('./connection')

// Directives
const _Authenticate         = require('./directives/authenticate')
const _Register             = require('./directives/register')
const _Validate             = require('./directives/validate')

// Methods
const _Authentication       = require('./methods/authentication')
const _Messages             = require('./methods/messages')
const _Regex                = require('./methods/regex')

// Mixins
const _Data                 = require('./mixins/data')
const _Status               = require('./mixins/status')

// Prototypes
const _Defaults             = require('./prototypes/defaults')

// Use the needed plugins

//
// 2) Vue.use
// **********

// Connection
Vue.use(_Connection)

// Methods
Vue.use(_Regex) // Regex methods and functions
Vue.use(_Messages) // Messages objects
Vue.use(_Authentication) // The authentication method

// Directives
Vue.use(_Authenticate) // v-update-authentication
Vue.use(_Register) // v-register
Vue.use(_Validate) // v-validate

// Mixins
Vue.use(_Data) // Global Vue data props
Vue.use(_Status) // Vuex localStorage status "middleware"

// Prototypes
Vue.use(_Defaults) // Stuff to bind to "this"-keyword and methods/functions to run right away