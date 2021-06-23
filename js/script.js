const app = new Vue(
    {
        el: '#app',
        data: {
            newData: '',
            todos: [
                'correre',
                'placcare',
                'arrampicare',
                'defecazio'
            ]
        },
        methods: {
            addTodo() {
                this.todos.push(this.newData);
                console.log(this.newData);
                this.newData = '';
            },
            removeData(index) {
                this.todos.splice(index, 1);
            }
        }
    }
)