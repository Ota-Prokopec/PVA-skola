


<script lang="ts">
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownWrapper, SidebarDropdownItem } from 'flowbite-svelte';
  let spanClass = 'flex-1 ml-3 whitespace-nowrap';
  $: activeUrl = location.pathname
  $: containPath = ()=>{
    // add your logic here
    true
  }
  </script>
  
  <main class=" w-[100vw] h-[100vh] absolute top-0 flex flex-wrap flex-row ">
	
	<Sidebar>
		<SidebarWrapper>
		  <SidebarGroup>
			  <SidebarDropdownItem label="create user" href="/user/create" active={activeUrl === '/user/create'} />
			  <SidebarDropdownItem label="search users" href='/user/get' active={activeUrl === '/user/get'}/>
			  <SidebarDropdownItem label="group create" href='/group/create' active={activeUrl === '/group/create'}/>			
			  <SidebarDropdownItem label="search groups" href='/group/get' active={activeUrl === '/group/get'}/>			
		  </SidebarGroup>
		</SidebarWrapper>
	  </Sidebar>

	<slot />
</main>
