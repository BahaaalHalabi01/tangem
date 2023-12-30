
import { cookieKey, EState, type TState } from "$lib/black-friday";
import type { LayoutServerLoad } from "./$types";


export const load: LayoutServerLoad = ({ cookies }) => {

  let show = true
  const value = cookies.get(cookieKey) as TState
  if (value && value === 'hide') {
    show = false
    return
  }

  !value && cookies.set(cookieKey, EState.show, {
    path: '/'
  })

  return {
    show
  }

}

