<script lang="ts">
	import { Router } from '$lib/router'

	import Layout from '$src/__layout.svelte'
	import Loading from '$src/__loading.svelte'
	import Error from '$src/__error.svelte'
</script>

<Router
	layout={Layout}
	loading={Loading}
	error={Error}
	routes={[
		{
			path: '/',
			component: () => import('$routes/index.svelte'),
		},
		{
			path: '/user/create',
			component: () => import('$routes/createUser.svelte'),
		},
		{
			path: '/user/get',
			component: () => import('$root/src/routes/getUser.svelte'),
		},
		{
			path: '/user/update/:userId',
			component: () => import('$root/src/routes/updateUser.svelte'),
		},
		{
			path: '/group/create',
			component: () => import('$root/src/routes/createGroup.svelte'),
		},
		{
			path: '/group/get',
			component: () => import('$root/src/routes/getGroups.svelte'),
		},
		{
			path: '/group/users/:groupId',
			component: () => import('$root/src/routes/usersInGroup.svelte'),
		},
	]}
/>
