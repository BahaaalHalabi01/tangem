<script>
  import ChevronRight from '$lib/chevron-right.svelte'
	const discount = 10;
	const code = '10FRIDAY';
</script>

<nav class="h-[54px]"></nav>
<div class="max-h-[54px] bg-dark flex lg:px-6 pr-6 py-1.5 items-center justify-between relative">
	<div class="bg-dark h-full md:hidden">
		<img src="/gift-small-mobile.svg" alt="gift" class=" h-[54px]" />
	</div>
	<div class="bg-dark h-full hidden md:block">
		<img src="/gift-small.svg" alt="gift" class=" h-[54px]" />
	</div>
	<ul
		class="flex gap-x-1 lg:gap-x-3 md:list-disc text-white list-inside md:absolute md:left-1/2 md:-translate-x-1/2"
	>
		<li class="list-none order-0">
			<strong>Black Friday,</strong><span class="hidden lg:inline-block"> 24-27 Nov</span>
		</li>
		<li class="order-3 lg:order-2"><strong class="text-yellow-500">{discount}{'%OFF'}</strong></li>
		<li class="md:inline hidden">
			Use code <strong class="text-yellow-500">{code}</strong>
			<span class="hidden lg:inline-block">at checkout</span>
		</li>
	</ul>
	<div class=" gap-x-3 flex items-center">
		<button
			class="md:bg-white rounded-full text-dark md:py-2.5 md:px-3.5 items-center flex justify-center md:max-h-[38px] md:w-[115px] text-white"
		>
			<ChevronRight />
			<span class="hidden md:inline"> Shop now </span>
		</button>
		<span class="text-white hidden lg:inline-block"> X </span>
	</div>
</div>

