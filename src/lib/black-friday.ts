import { writable } from "svelte/store";

const discount = 10;
const holiday = 'Black Friday';
const code = '10FRIDAY';
const date = '24-27 Nov'


const visible = writable(true)

function intersectionObserver(node: HTMLElement) {

  const options = {
    rootMargin: '0px',
    threshold: 1,
  } satisfies IntersectionObserverInit

  const observer = new IntersectionObserver(entries => {
    const [entry] = entries
    visible.set(entry.isIntersecting)

  }, options);

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}


export { discount, holiday, code, date, intersectionObserver, visible }
