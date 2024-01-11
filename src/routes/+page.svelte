<script>
	import { enhance } from '$app/forms';
	import { cn } from '$lib';
	import { code, discount, holiday, visible } from '$lib/black-friday';
	import Close from '$lib/close.svelte';

	function handleSubmit() {
		visible.set({ clicked: true, show: false });
	}
</script>

<div class="pt-card" />
<section
  data-cy='ad-card'
  id='card'
	class={cn(
		`bg-black-friday h-card px-3.5  py-1.5 grid-cols-1 shadow-3xl bg-no-repeat 
      md:w-card-w md:ml-auto md:mr-4 md:rounded-2xl md:grid-cols-2 sticky top-8 right-8 grid transition-all duration-[1500ms] ease-out-expo`,
		(!$visible.show || $visible.clicked) && 'hide'
		//move it to the right to hide it and make the transition
	)}
>
	<div class="hidden md:block" />
	<div class="flex flex-col items-center justify-center pt-5 relative">
		<!-- can do it on client side also, on svelte i prefer form actions -->
		<form method="POST" on:submit|preventDefault={handleSubmit} use:enhance >
      <button class="sr-only" data-cy='close'></button>
			<button class="absolute top-3.5 right-0"> <Close /></button>
		</form>
		<h1 class="text-[46px] font-medium text-white leading-10 text-center">{holiday}</h1>
		<strong class="text-[40px] font-medium gradient-text">{discount}%OFF</strong>
		<p class="text-light-dark font-medium pt-2">Use code <strong>{code}</strong> at checkout</p>
		<div class="pt-12" />
		<a
			href="/shop"
			class="px-6 py-3 bg-secondary-dark text-white rounded-[14px] h-[42px] flex items-center font-medium"
		>
			Shop now
			<span class="hidden md:inline"> &nbsp; through Monday </span>
		</a>
	</div>
</section>

<div data-cy="bottom" class="absolute bottom-0 left-0 "/>
