<script lang="ts">
	import '../app.css';
	import Close from '$lib/close.svelte';
	import ChevronRight from '$lib/chevron-right.svelte';
	import { code, date, discount, holiday, intersectionObserver } from '$lib/black-friday';

	$effect(() => {
		const node = document.getElementById('nav-black-friday');
		if (!node) return;
		const intersectionObserverAction = intersectionObserver(node);

		return () => {
			intersectionObserverAction.destroy();
		};
	});
</script>

<nav class="h-[54px]"></nav>
<div
	class="h-[54px] bg-dark flex lg:px-6 pr-6 py-1.5 items-center justify-between relative"
	id="nav-black-friday"
>
	<div class="bg-dark md:hidden">
		<img src="/gift-small-mobile.svg" alt="gift" />
	</div>
	<div class="bg-dark hidden md:block">
		<img src="/gift-small.svg" alt="gift" />
	</div>
	<ul
		class="flex gap-x-1 lg:gap-x-3 md:list-disc text-white list-inside md:absolute md:left-1/2 md:-translate-x-1/2"
	>
		<li class="list-none order-0">
			<strong class="text-white">{holiday},</strong><span class="hidden lg:inline-block">
				&nbsp;
				{date}</span
			>
		</li>
		<li class="order-3 lg:order-2">
			<strong class="text-yellow-500">{discount}{'%OFF'}</strong>
		</li>
		<li class="md:list-item hidden">
			Use code <strong class="text-yellow-500">{code}</strong>
			<span class="hidden lg:inline-block">at checkout</span>
		</li>
	</ul>
	<div class=" gap-x-3 flex items-center">
		<button
			class="md:bg-white rounded-full text-dark md:py-2.5 md:px-3.5 items-center flex justify-center md:max-h-[38px] md:w-[115px]"
		>
			<ChevronRight class="inline md:hidden" />
			<span class="hidden md:inline text-dark"> Shop now </span>
		</button>
		<span class="text-white hidden lg:inline-block"> <Close /></span>
	</div>
</div>

<main class="relative grow">
	<slot />
</main>
