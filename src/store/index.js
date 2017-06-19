import Vue from 'vue';
import Vuex from 'vuex';
import lowdb from 'lowdb';

Vue.use(Vuex);

const db = lowdb('db');

const user = {};

db.defaults({
  user
}).write();

export default new Vuex.Store({
  state: {
    user: {}
  },
  actions: {
    loadUser(context) {
      const user = db.get('user').value();
      context.commit('setUser', user);
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    userLogin(state, user) {
      state.user = user;
      db.set('user.email', user.email).write();
      db.set('user.isLogin', true).write();
    },
    userLogout(state) {
      state.user.isLogin = false;
      db.set('user.isLogin', false).write();
    }
  }
});
