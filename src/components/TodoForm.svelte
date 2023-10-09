<script lang="ts">
    let todo: string;
    import { addTodo } from "../stores/todostore";
    function handleSubmit() {
        if (todo == null || todo == "") {
            return;
        }
        addTodo(todo);
        todo = "";
    }
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col text-sm mb-2">
        <label for="todo" class="font-bold mb-2 text-gray-800">Todo</label>
        <input
            type="text"
            name="todo"
            bind:value={todo}
            class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
            placeholder="Enter Task"
        />
    </div>
    <button
        type="submit"
        class="w-full shadow-sm rounded-lg bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
        >Submit</button
    >
</form>
