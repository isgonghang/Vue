
//存取localstorge当中的数据
var store={
	save:function(key,value){
		localStorage.setItem(key,JSON.stringify(value));
	},
	fetch:function(key){
		return JSON.parse(localStorage.getItem(key))||[];
	}
};

/*var list = [
	{
		title:"吃饭打豆豆",
		isChecked:false //状态为false，为不选中  任务未完成
	},
	{
		title:"妙味课堂",
		isChecked:true   //状态为true，为选中    任务完成
	}
];*/
//取出所有的值
var list=store.fetch("todo-class");

//过滤时候有三种情况 all finished unfinished
var filter={
	all:function(list){
		return list;
	},
	finished:function(list){
		return list.filter(function(item){
			return item.isChecked;
		})
	},
	unfinished:function(){
		return list.filter(function(item){
			return !item.isChecked;
		})
	},
}

var vm=new Vue({
	el:".main",
	data:{
		list:list,
		todo:"",
		edtorTodos:'',  //记录正在编辑的数据
		beforeTitle:'' ,//记录正在编辑的数据的title
		visibility:"all"//通过这个属性值的变化对数据筛选
	},
	watch:{
		/*list:function(){  //浅监控list这个属性，当这个属性对应的值发生变化就会执行函数
			store.save("todo-class",this.list);
		}*/
		list:{
			handler:function(){  //深度监控
				store.save("todo-class",this.list);
			},
			deep:true
		},
	},
	computed:{
		noCheckeLength:function(){
			return this.list.filter(function(item){
                return !item.isChecked
            }).length
		},
		filteredList:function(){
			// 找到了过滤函数，则返回过滤后数据，如果没有则返回所有数据
			return filter[this.visibility](list)?filter[this.visibility](list):list;
		}
	},
	methods:{
		addTodo(){  //添加任务
			this.list.push({
				title:this.todo,
				isChecked:false
			});
			this.todo = '';
		},
		deleteTodo(todo){ //删除任务
			var index = this.list.indexOf(todo);
			this.list.splice(index,1);
		},
		edtorTodo(todo){  //编辑任务
			console.log(todo);
			//编辑任务的时候，记录一下编辑这条任务的title，方便在取消编辑的时候重新给之前的title
			this.beforeTitle = todo.title;

			this.edtorTodos = todo;


		},
		edtorTodoed(todo){ //编辑任务成功
			this.edtorTodos = '';
		},
		cancelTodo(todo){  //取消编辑任务

			todo.title = this.beforeTitle;

			this.beforeTitle = '';

			//让div显示出来，input隐藏
			this.edtorTodos = '';
		}
	},
	directives:{
		"foucs":{
			update(el,binding){
				if(binding.value){
					el.focus();
				}
			}
		}
	}
});

//监测初始hash值
function watchHashChange(){
	var hash=window.location.hash.slice(1);
	vm.visibility=hash;
}

watchHashChange();
//根据hash值的不同来筛选任务
window.addEventListener("hashchange",watchHashChange);