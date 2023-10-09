<script lang="ts">
    import { fade } from "svelte/transition";
    import TodoForm from "../components/TodoForm.svelte";
    import TodoList from "../components/TodoList.svelte";
    import { todos } from "../stores/todostore";
</script>

<main>
    <h1 class="select-none text-2xl font-bold text-center text-gray-800 md:text-3xl">
        My Todos
    </h1>
    <TodoForm />
    {#if !$todos.some((todo) => !todo.completed)}
        <p>Hurry up and do something!</p>
    {/if}
    <TodoList completedType={false} />
    {#if $todos.some((todo) => todo.completed)}
        <hr class="my-6 h-0.5 rounded border-0 bg-gray-300" />
    {/if}
    <TodoList completedType={true} />
    <b class="bottom-0 left-0 absolute p-10 select-none">Made by AJ08Coder</b>
</main>
