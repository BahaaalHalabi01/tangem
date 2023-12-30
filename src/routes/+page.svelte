<script>
	import { cn } from '$lib';
	import { code, discount, holiday ,visible} from '$lib/black-friday';
	import Close from '$lib/close.svelte';


  $inspect($visible)
</script>

<div class="pt-card" />
<section
	class={cn(`bg-black-friday-small md:bg-black-friday h-card px-3.5 bg-center w-card-w ml-auto mr-4 rounded-2xl bg-white md:grid-cols-2 sticky top-8 right-8`,
    $visible ? 'hidden' :'grid'
  )}
>
  <div class="hidden md:block"/>
	<button class="absolute top-3.5 right-3.5"> <Close /></button>
  <div class="flex flex-col items-center justify-center pt-4">
	<h1 class="text-[46px] font-medium text-white leading-10 text-center">{holiday}</h1>
	<strong class="text-[40px] font-medium">{discount}%OFF</strong>
	<p class="text-light-dark font-medium pt-2">Use code <strong>{code}</strong> at checkout</p>
	<div class="pt-12" />
	<a
		href="/shop"
		class="px-6 py-3 bg-secondary-dark text-white rounded-[14px] h-[42px] flex items-center font-medium"
	>
		Shop now
      <span class="hidden md:inline">
        &nbsp;
        through Monday
        </span>
	</a>
    </div>
</section>
