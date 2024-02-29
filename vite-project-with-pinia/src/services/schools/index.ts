// this file will be the place where we create the endpoints for the schools
import http from "../api"
import { APIResponse } from "../types"
import { School, InputCreateSchool, InputUpdateSchool } from "./types"

async function getSchools() {
  return await http.get<APIResponse<School[]>>(`school`)
}

async function deleteSchool(id: number) {
  return await http.delete<APIResponse<boolean>>(`school/${id}`)
}

async function createSchool(input: InputCreateSchool) {
  return await http.post<APIResponse<School>>(`school`, input)
}

async function updateSchool(input: InputUpdateSchool) {
  return await http.put<APIResponse<boolean>>(`school`, input)
}

export default {
  getSchools,
  deleteSchool,
  createSchool,
  updateSchool
}