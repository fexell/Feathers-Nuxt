import Vue from 'vue'

export default function({ store, redirect }) {

    const result = Vue.$Store.state.accessToken ? redirect('/dashboard') : null

}