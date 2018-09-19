import Vue from 'vue'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'

var app, socket

Vue.feathers = feathers
Vue.socketio = socketio
Vue.io = io

Vue.app = feathers()
Vue.socket = io('http://localhost:3030')

Vue.app.configure(socketio(Vue.socket))

Vue.use(Vue.app)
