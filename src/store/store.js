import { writable } from 'svelte/store'
export const username = writable('Victor')
export const isSignedIn = writable(false)