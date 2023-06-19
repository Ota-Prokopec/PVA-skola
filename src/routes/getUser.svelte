<script lang="ts">
	import { f } from '$lib/api'
    import { Label, Input, Helper, Button, Avatar } from 'flowbite-svelte'
    import fetchable from 'svelte-fetchable'
	import { navigate } from 'svelte-routing'

    $: username = ""
    


   $: promise = f("/searchUsers.php", "POST", {
    username
   })


</script>

<div class="flex flex-wrap flex-col gap-4">
    <div class="text-4xl">Najdi uživatele</div>

    <Input placeholder="username" bind:value={username}></Input>

    {#await promise then data}
    {#if data.length}
    {#each data as [user, social]}
    <button on:click={() => navigate(`/user/update/${user.userId}`)} class="flex items-center space-x-4 border-2 hover:border-4 border-green-500 rounded-xl">
        <Avatar  rounded>{user.username.split(" ")[0][0]} {user.username.split(" ")[1] ? user.username.split(" ")[1][0] : ""}</Avatar>
        <div class="space-y-1 font-medium dark:text-white">
            <span>username: {user.username}</span>
            <div class="text-sm text-gray-500 dark:text-gray-400 flex flex-wrap flex-col">
            <span>userId: {user.userId}</span>
            <span>twitter: {social?.twitter??"nemá"}</span>
            <span>facebook: {social?.facebook??"nemá"}</span>
            <span>instagram: {social?.instagram??"nemá"}</span>
            <span>quizi: {social?.quizi??"nemá"}</span>
            </div>
        </div>
    </button>

    {/each}
    {:else}
    nic není
    {/if}
    
   
   
    {/await}
   
      
    
</div>
