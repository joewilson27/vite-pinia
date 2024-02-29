import http from "../api"
import { APIResponse } from "../types"
import { Student, InputCreateStudent, InputUpdateStudent } from "./types"

async function getStudents() {
  return await http.get<APIResponse<Student[]>>(`student`)
}

async function deleteStudent(id: number) {
  return await http.delete<APIResponse<boolean>>(`student/${id}`)
}

async function createStudent(input: InputCreateStudent) {
  return await http.post<APIResponse<Student>>(`student`, input)
}

async function updateStudent(input: InputUpdateStudent) {
  return await http.put<APIResponse<boolean>>(`student`, input)
}

export default {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
}