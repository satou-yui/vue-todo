(function() {
  'use strict';

    var vm = new Vue({
      el: '#app',
      data: {
        tagStatus: 'all',
        newItem: '',
        status: 'wip',
        todos:[ ]
      },
      watch: {
        todos: {
          handler: function() {
            localStorage.setItem('todos',JSON.stringify(this.todos));
          },
          deep: true
        }
      },
      mounted: function() {
        this.todos =JSON.parse(localStorage.getItem('todos')) ||[];

        
      },
      computed: {
        filteredTodos: function () {
          if(this.tagStatus === 'all') {
            return this.todos
          } else {
            return this.todos.filter(
              todo => todo.status === this.tagStatus
            )
          }
        }
      },
      methods: {
        addItem: function(){
          if (this.newItem == '') return;

          let item = {
            title: this.newItem,
            status: this.status
          }
          this.todos.push(item);
          this.newItem ="";
        },
        deleteItem: function(index){
          this.todos.splice(index,1);
        },
        chengeTagStatus: function(status){
          this.tagStatus = status;
        }
      }
    })
})();