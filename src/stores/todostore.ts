import { tick } from "svelte";
import { writable } from "svelte/store";

export const todos = writable<Todo[]>([]);

interface Todo {
    text: string;
    completed: boolean;
    id: number;
}
export function addTodo(text: string) {
    todos.update((cur) => {
        const newTodos = [...cur, { text, completed: false, id: Date.now() }];
        return newTodos
    })

}

export function deleteTodo(id: number) {
    // @ts-ignore
    if (!document.startViewTransition) {
        todos.update(todos => todos.filter(todo => todo.id != id))
    }
    // @ts-ignore
    document.startViewTransition(async () => {
        todos.update(todos => todos.filter(todo => todo.id != id))
        await tick();
    });
}

export function toggleTodoCompleted(id: number) {
    // @ts-ignore
    if (!document.startViewTransition) {
        normal();
    }

    // @ts-ignore
    document.startViewTransition(async () => {
        normal();
        await tick();
    });

    function normal() {
        todos.update(todos => {
            let index = -1;
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].id == id) {
                    index = i;
                    break;
                }
            }
            if (index != -1) {
                todos[index].completed = !todos[index].completed;
            }
            return todos
        })
    }
}