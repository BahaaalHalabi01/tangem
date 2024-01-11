import { writable } from "svelte/store";

const cookieKey = 'advertisment' as const


enum EState {
  show = 'show',
  hide = 'hide'

}

type TState = keyof typeof EState

const discount = 10;
const holiday = 'Black Friday';
const code = '10FRIDAY';
const date = '24-27 Nov'


/** this refers to the card banner*/
const visible = writable({
  show: false,
  clicked: false
})

function intersectionObserver(node: HTMLElement,callback:(entry:IntersectionObserverEntry)=>void) {

  const options = {
    rootMargin: '0px',
    threshold: 0,
  } satisfies IntersectionObserverInit


  const observer = new IntersectionObserver(entries => {
    const [entry] = entries
    callback(entry)
   

  }, options);

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}


export { discount, holiday, code, date, intersectionObserver, visible, cookieKey, EState, type TState }
