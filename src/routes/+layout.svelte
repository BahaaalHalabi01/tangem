<script lang="ts">
	import '../app.css';
	import Close from '$lib/close.svelte';
	import ChevronRight from '$lib/chevron-right.svelte';
	import { code, date, discount, holiday, intersectionObserver, visible } from '$lib/black-friday';
	import type { LayoutData } from './$types';
	import { type Snippet } from 'svelte';
	import { cn } from '$lib';

	let { data, children } = $props<{ data: LayoutData; children: Snippet }>();

	$effect(() => {
		if (!data.show || $visible.clicked) return;
		const node = document.getElementById('nav-black-friday');
		if (!node) return;
		const intersectionObserverAction = intersectionObserver(node, callback);

		function callback(entry: Parameters<Parameters<typeof intersectionObserver>[1]>[0]) {
			//to not keep setting the store
			if ($visible.show === entry.isIntersecting) {
				$visible.show = !entry.isIntersecting;
			}
		}

		return () => {
			intersectionObserverAction.destroy();
		};
	});
</script>

<header>
	<nav class="h-[54px] bg-white"></nav>
	<div
		data-cy="top"
		class="h-[54px] bg-dark flex lg:px-6 pr-6 py-1.5 items-center justify-between relative"
		id="nav-black-friday"
	>
		<div
			id="gradient"
			class="absolute right-0 w-[55vw] gradient-bg h-full opacity-35 hidden md:block"
		/>
		<div class="bg-dark md:hidden">
			<img src="/gift-small-mobile.svg" alt="gift" />
		</div>
		<div class="bg-dark hidden md:block">
			<img src="/gift-small.svg" alt="gift" />
		</div>
		<ul
			class="flex gap-x-1 lg:gap-x-3 md:list-disc text-white list-inside md:absolute md:left-1/2 md:-translate-x-1/2 flex-wrap"
		>
			<li class="list-none order-0">
				<strong class="text-white">{holiday}<span class="md:hidden lg:inline-block">,</span></strong><span class="hidden lg:inline-block">
					&nbsp;
					{date}</span
				>
			</li>
			<li class="lg:order-3">
				<strong class="text-yellow-500">{discount}{'%OFF'}</strong>
			</li>
			<li class="md:list-item hidden md:order-2">
				Use code <strong class="text-yellow-500">{code}</strong>
				<span class="hidden lg:inline-block">at checkout</span>
			</li>
		</ul>
		<div class=" gap-x-3 flex items-center">
			<button
				class="md:bg-white rounded-full text-dark md:py-2.5 md:px-3.5 items-center flex justify-center md:max-h-[38px] md:w-[115px] font-medium"
			>
				<ChevronRight class="inline md:hidden" />
				<span class="hidden md:inline text-dark"> Shop now </span>
			</button>
			<span class="text-white hidden lg:inline-block"> <Close /></span>
		</div>
	</div>
</header>
  <!-- there must be a better way than this to keep the card sticky!!!-->
<main class={cn('min-h-huge relative',(!$visible.show || $visible.clicked) && 'overflow-x-hidden')}>
		{@render children()}
</main>
