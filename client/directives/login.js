import Vue from 'vue'

const feathers 		= require('@feathersjs/feathers')
const socketio 		= require('@feathersjs/socketio-client')
const io 			= require('socket.io-client')

const socket 		= io('http://localhost:3030')
const app 			= feathers()

app.configure(socketio(socket))

export const LoginUser = {
	console.log('Test')
}

Vue.directive('loginuser', LoginUser)