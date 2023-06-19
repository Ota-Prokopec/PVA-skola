<script lang="ts">
	import { f } from '$lib/api'
	import Error from '$lib/components/Error.svelte'
    import { Label, Input, Helper, Button } from 'flowbite-svelte'
    import fetchable from 'svelte-fetchable'


    let groupName = ""

    let ig = "https://www.instagram.com/"
    let twitter = "https://twitter.com/?lang=cs"
    let quizi = "quizmate.vercel.app"
    let fb = "https://www.facebook.com/"

    let res: boolean | null = null
   

    const send = async() => {

        if (groupName.length < 4 ) {
            alert("jméno skupiny musí obsahovat nejméně 4 znaky")
            return 
        }
    
        res = await f("/createGroup.php", "POST", {
         groupName,
         ig,
         twitter,
         quizi,
         fb
       })
       
        console.log(res);
        
    
    }


</script>

<div class="flex flex-wrap flex-col gap-4">
    <div class="text-4xl">create group</div>

    <div>
        <Input label="userId" bind:value={groupName}   required placeholder="group name"/>
        
        <Input bind:value={twitter} label="twitter"   required placeholder="twitter"/>
        <Input bind:value={fb} label="fb"   required placeholder="fb"/>
        <Input bind:value={ig} label="ig"   required placeholder="ig"/>
        <Input bind:value={quizi} label="quizi"   required placeholder="quizi"/>

        <Button on:click={() => send()} color="alternative" pill>uložit</Button>

    </div>

    <Error bind:value={res}></Error>

      
    
</div>
