import http from "../api"
import { APIResponse } from "../types"
import { Teacher, InputCreateTeacher, InputUpdateTeacher } from "./types"

async function getTeachers() {
  return await http.get<APIResponse<Teacher[]>>(`teacher`)
}

async function deleteTeacher(id: number) {
  return await http.delete<APIResponse<boolean>>(`teacher/${id}`)
}

async function createTeacher(input: InputCreateTeacher) {
  return await http.post<APIResponse<Teacher>>(`teacher`, input)
}

async function updateTeacher(input: InputUpdateTeacher) {
  return await http.put<APIResponse<boolean>>(`teacher`, input)
}

export default {
  getTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher,
}