<script lang="ts">
	import { f } from '$lib/api'
	import Error from '$lib/components/Error.svelte'
    import { Label, Input, Helper, Button } from 'flowbite-svelte'
    import fetchable from 'svelte-fetchable'
	import { navigate } from 'svelte-routing'


  


    let groups: any[] = [];

    (async() => {
        groups = await f("/getGroups.php", "POST", {})
    })()
    
        
       
        
    
    


</script>

<div class="flex flex-wrap flex-col gap-4">
    <div class="text-4xl">Vyhledejte skupinu</div>

   {#each groups as [group, social]}
        <button on:click={() => navigate(`/group/users/${group.id}`)} class="py-3 sm:py-4 border-2 hover:border-4 border-green-500 rounded-xl">
            <div class="flex items-center space-x-3">
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">{group.groupName}</p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400 flex flex-wrap flex-col">
                        <span>twitter: {social.twitter}</span>
                        <span>facebook: {social.facebook}</span>
                        <span>instagram: {social.instagram}</span>
                        <span>quizi: {social.quizi}</span>
                    </p>

                </div>
               
            </div>
        </button>
   {/each}

      
    
</div>
