// this file will be the file for all our types

export type School = {
  id: number
  name: string
  description: string
}

export type InputCreateSchool = {
  id: number
  name: string
  description: string
}

export type InputUpdateSchool = {
  id: number
  description: string
}