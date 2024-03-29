import { EState, cookieKey } from "$lib/black-friday";
import type { Actions } from "./$types";

export const actions = {
  default: async ({ cookies }) => {
    cookies.set(cookieKey, EState.hide, { path: '/' })
  }
} satisfies Actions
