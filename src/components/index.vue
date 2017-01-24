<template>
	<h1>Index</h1>
	<hr/>
	<p>Hello index</p>
	<div id="example">
		<input type="text" v-model="searchText" name="">
		<ul :class="[classA, {classB:isB}]">
			<li v-for="li in lis | orderBy field reverse">{{$index}} - {{li.value}}</li>
		</ul>
		<form>
			<div class="form-group">
				姓名：
				<input type="text" v-model="form.name" name="name">
			</div>
			<div class="form-group">
				性别：
				<input type="radio" v-model="form.sex" name="sex" value="male">
				<label for="male">男</label>
				<input type="radio" v-model="form.sex" name="sex" value="female">
				<label for="female">女</label>
			</div>
			<div class="form-group">
				兴趣：
				<input type="checkbox" v-model="form.interest" name="interest[]" value="swim">
				<label>swim</label>
				<input type="checkbox" v-model="form.interest" name="interest[]" value="read">
				<label>read</label>
				<input type="checkbox" v-model="form.interest" name="interest[]" value="sing">
				<label>sing</label>
			</div>
			<div class="form-group">
				身份：
				<select v-model="form.identity">
					<option value="teacher">teacher</option>
					<option value="doctor">doctor</option>
					<option value="lawyer">lawyer</option>
					<option value="student">student</option>
				</select>
			</div>
		</form>
		<hr>
		<p>chapter 4</p>
		<input type="text" v-model="didi" name="">
		<input type="text" v-model="family" name="">
		<br>
		didi = {{didi}}, family = {{family}}, didiFamily = {{didiFamily}}
	</div>
	<my-directive class="hello" name="hi"></my-directive>
	

	<pre>
		form: { 
			name: {{form.name}},
			sex: {{form.sex}},
			interest: {{form.interest}},
			identity: {{form.identity}}
		}
	</pre>
</template>

<script type="text/javascript">
	export default {
		el () {
			'#example'
		},
		data () {
			return {
				classA: 'ulA',
				isB: true,
				field: 'value',
				reverse: 'false',
				form:{
					name: 'semine',
					sex: 'female',
					interest: ['swim', 'sing'],
					identity: 'student'
				},
				lis: [
					{value:'write a daily', tag: 1},
					{value:'keep running', tag: 3},
					{value:'dress up', tag: 0},
					{value:'love yourself', tag: 2}
				],
				didi: 1, // chapter 4
				family: 2
			}
		},
		computed () {
			return {
				didiFamily: function(){
					return this.didi + this.family
				}
			}
		}
	}
</script>