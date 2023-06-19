<script lang="ts">
	import { f } from '$lib/api'
	import Error from '$lib/components/Error.svelte'
    import { Label, Input, Helper, Button, Badge, Avatar } from 'flowbite-svelte'
    import fetchable from 'svelte-fetchable'

    export let params: {userId: string}


    let username = ""
    let ig = "https://www.instagram.com/"
    let twitter = "https://twitter.com/?lang=cs"
    let quizi = "quizmate.vercel.app"
    let fb = "https://www.facebook.com/"
    let groupId = ""

    let res: boolean | null = null

    let groups: any[]

    $: console.log(groups);
    
   

    const update = async() => {        
        res = await f("/updateUser.php", "POST", {
         username,
         userId: params.userId,
         ig,
         twitter,
         quizi,
         fb
       })
    }

    const writeGroupToAccount = async(groupId: string) => {        
        res = await f("/updateGroup.php", "POST", {
         groupId,
         userId: params.userId,
         
       })
    }


    let loading = true;
    (async() => {

       // let [user, social] = [null, null]

        const [g, [user, social]] = await Promise.all([
            f("/getGroups.php", "POST", {}),
            f("/getUser.php", "POST", {userId: params.userId })
        ]) 

        groups = g
       
      
       username = user.username
       ig = social?.instagram??""
       twitter = social?.twitter??""
       quizi  =social?.quizi??""
       fb = social?.facebook??""
       groupId = user.group_
     
       loading = false
    })()


</script>

<div class="flex flex-wrap flex-col gap-4">
    <div class="text-4xl">Aktualizovat uživatele</div>

    {#if loading}
        ....
        {:else}
        <div>
            <Input bind:value={username} label="name"   required placeholder="username"/>
           
            <Input bind:value={twitter} label="twitter"   required placeholder="twitter"/>
            <Input bind:value={fb} label="fb"   required placeholder="fb"/>
            <Input bind:value={ig} label="ig"   required placeholder="ig"/>
            <Input bind:value={quizi} label="quizi"   required placeholder="quizi"/>
    
           
            <Button on:click={() => update()} color="alternative" pill>Aktualizovat</Button>
        </div>
        {#each groups as [group, social]}
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-3">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">Group</p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">{group.groupName}</p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400 flex flex-wrap flex-col">
                            <span>twitter: {social.twitter}</span>
                            <span>facebook: {social.facebook}</span>
                            <span>instagram: {social.instagram}</span>
                            <span>quizi: {social.quizi}</span>
                        </p>

                    </div>
                    <Badge  color="" rounded class="px-2.5 py-0.5">
                        {#if group.id !== groupId}
                          <Button on:click={() => {
                            writeGroupToAccount(group.id)
                            groupId = group.id
                            }}>Zapsat uživateli skupinu</Button>
                        {:else}
                            <span>Skupina uživatele</span>
                        {/if}
                    </Badge>
                </div>
            </li>
        {/each}
    {/if}
    


    <Error bind:value={res}></Error>
      
    
</div>
