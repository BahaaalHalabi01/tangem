<script>
	import { code, discount, holiday } from '$lib/black-friday';
  import Close from '$lib/close.svelte'
</script>

<div class="pt-card" />
<section class="bg-black-friday h-card px-3.5 relative flex flex-col items-center justify-center bg-center max-w-card-w">
	<button class="absolute top-3.5 right-3.5 text-white"> <Close/></button>
	<h1 class="text-[46px] font-medium text-white leading-10 pb-2 text-center">{holiday}</h1>
	<strong class="text-[40px] font-medium">{discount}%OFF</strong>
	<p class="text-light-dark font-medium">Use code <strong>{code}</strong> at checkout</p>
  <div class="pt-12"/>
	<a href="/shop" class="px-6 py-3  bg-secondary-dark text-white rounded-[14px] h-[42px] flex items-center"> Shop Now </a>
</section>
