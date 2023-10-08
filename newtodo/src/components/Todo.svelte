<script lang="ts">
    import { deleteTodo, toggleTodoCompleted } from "../stores/todostore";
    import { fade, fly } from "svelte/transition";
    export let todo: any;
    export let completedType = false;

</script>


<li transition:fade={{duration: 100 }} class="container flex">

    <label class="flex items-center bg-white shadow-sm border
     border-gray-200 rounded-lg my-2 py-2 px-2 flex-1 hover:bg-slate-50 hover:cursor-pointer">
        
        <input 
            type="checkbox" 
            name="completed"
            checked={todo.completed}
            on:change={() => toggleTodoCompleted(todo.id)}
            class="form-checkbox h-5 w-5 hover:cursor-pointer" id="checkbox" />

        <span class={`ml-2 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>

    </label>

    <button type="button" class="my-2 py-2 px-4 ml-2 justify-center text-sm bg-red-500
     hover:bg-red-600 text-white py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline"
    on:click={() => deleteTodo(todo.id)}>Delete</button>

</li>

