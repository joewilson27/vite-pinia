// this file will be useful to define our main types

export type APIResponse<T> = {
  success: boolean
  content: T
  status?: number
}

/**
 * This type will REPRESENT all the responses body for our different endpoints, 
 * as you can see is GENERIC <T> due to the fact that our responses will be different 
 * depending on the endpoint that we use
 */