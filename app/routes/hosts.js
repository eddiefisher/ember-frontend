import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        // let hosts = [
        //     {
        //         id: 1,
        //         user_color: '',
        //         title: "Learn Ember",
        //     },
        //     {
        //         id: 2,
        //         user_color: '#BBAADD',
        //         title: "Solve World Hunger",
        //     },
        //     {
        //         id: 3,
        //         user_color: '#AABBCC',
        //         title: "Solve Hunger",
        //     }
        // ];
        // return hosts.concat(hosts).concat(hosts).concat(hosts).concat(hosts).concat(hosts).concat(hosts);
        return Ember.$.getJSON('http://127.0.0.1:3000')
    }
});
