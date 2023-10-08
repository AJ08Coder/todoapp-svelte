  <script lang="ts"> 
       import { todos } from "../stores/todostore";
       import Todo from "../components/Todo.svelte";
   
       export let completedType = false;

</script>

<main> 
   {#each $todos as todo(todo.id)}

        <Todo todo={todo} />
    
    {/each}
</main> 