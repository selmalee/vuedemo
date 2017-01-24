import Vue from 'vue';

export const chat = Vue.directive('chat', function (value) {
    console.log(this.el); //world
    console.log(this.arg);          //hello
    console.log(this.name);         //chat
    console.log(this.expression);   //msg
});

export const test = Vue.directive('test', function (value) {
    console.log(value);
});

export const ele = Vue.elementDirective('my-directive', {
	bind: function() {
		console.info(this.el.className);
		console.info(this.el.getAttribute('name'));
	}
})