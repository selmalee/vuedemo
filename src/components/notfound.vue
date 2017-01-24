<template>
	<h1>404</h1>
	<hr/>
	<p>Not found</p>
	<div id="chat" v-chat="'msg'">world</div>
</template>

<script type="text/javascript">
	module.export = function(){
		
		var chat = new Vue({
		    el: '#chat',
		    data: {
		        msg: 'hello'
		    }
		});
		
	}
</script>