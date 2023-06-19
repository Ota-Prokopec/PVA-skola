<script lang="ts">
	import { f } from '$lib/api'
	import Error from '$lib/components/Error.svelte'
    import { Label, Input, Helper, Button } from 'flowbite-svelte'
    import fetchable from 'svelte-fetchable'


    $: username = ""
    $: userId = ""

    let res: boolean | null = null
   

    const send = async() => {

        if (username.length < 4 || userId.length < 4) {
            alert("uživatelské jméno i uživatelské ID musí obsahovat nejméně 4 znaky")
            return 
        }
    
        res = await f("/createUser.php", "POST", {
         username,
         userId
       })
       
        console.log(res);
        
    
    }


</script>

<div class="flex flex-wrap flex-col gap-4">
    <div class="text-4xl">Vytvořit uživatele</div>

    <div class="flex flex-wrap flex-col gap-2">
        <Label class='block mb-2' >Uživatel: </Label>
        <Input label="userId" bind:value={userId}   required placeholder="uživatelské ID"/>
        <Input bind:value={username} label="name"   required placeholder="uživatelské jméno / přezdívka"/>
        <Button on:click={() => send()} color="alternative" pill>uložit</Button>

    </div>

    <Error bind:value={res}></Error>

      
    
</div>
