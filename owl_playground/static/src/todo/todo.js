/** @odoo-module **/

import { useState, useRef, Component } from "@odoo/owl"
import { useAutoFocus } from "../utils/utils";

export class Todo extends Component {
    static template = "todo.todo";

    static props = {
        id: Number,
        description: String,
        done: Boolean
    }
}

export class TodoList extends Component {
    static template = "todo.todolist";
    static components = { Todo };

    setup() {
        useAutoFocus(useRef("todoInput"));
        this.todos = useState(
            [
                { id: 1, description: "buy milk", done: false },
                { id: 2, description: "buy eggs", done: true },
                { id: 3, description: "buy avocado", done: true },
            ]
        );
    }

    addTodo(e) {
        if (e.keyCode === 13 && e.target.value) {
            this.todos.push(
                {
                    id: this.todos.length + 1,
                    description: e.target.value,
                    done: false
                }
            );
            e.target.value = "";
        }
    }
}
