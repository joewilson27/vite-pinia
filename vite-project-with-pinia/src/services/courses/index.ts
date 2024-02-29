import http from "../api"
import { APIResponse } from "../types"
import { Course, InputCreateCourse, InputUpdateCourse } from "./types"

async function getCourses() {
  return await http.get<APIResponse<Course[]>>(`course`)
}

async function deleteCourse(id: number) {
  return await http.delete<APIResponse<boolean>>(`course/${id}`)
}

async function createCourse(input: InputCreateCourse) {
  return await http.post<APIResponse<Course>>(`course`, input)
}

async function updateCourse(input: InputUpdateCourse) {
  return await http.put<APIResponse<boolean>>(`course`, input)
}

export default {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
}
