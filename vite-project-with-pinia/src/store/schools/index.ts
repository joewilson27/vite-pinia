// With Pinia, there are two ways to create a store, in an object or with a callback. I will use the second options as it’s like the Composition Api
import { defineStore } from "pinia"
import { ref } from 'vue'
import { 
  InputCreateSchool,
  InputUpdateSchool,
  School 
} from '../../services/schools/types'
import { APIResponse } from "../../services/types"
import { API } from "../../services"
import { AxiosError } from "axios"

export const useSchoolStore = defineStore("schoolstore", () => {
  const schools = ref<School[]>([]) 

  function initSchools(data: School[]) {
    schools.value = data
  }

  function addNewSchool(school: School) {
    schools.value.push(school)
  }

  function removeSchool(id: number) {
    const idx = schools.value.findIndex(s => s.id === id)
    if (idx === -1) return // nothing found
    schools.value.splice(idx, 1)
  }

  async function dispatchGetSchools(): Promise<APIResponse<null>> {
    try {
      const { status, data } = await API.school.getSchools()
      if (status === 200) {
        initSchools(data.content)
        return {
          success: true,
          content: null
        }
      }
    } catch (err) {
      const _err = err as AxiosError<String>
      return {
        success: false,
        status: _err.response?.status,
        content: null
      }
    }
    return {
      success: false,
      content: null,
      status: 400
    }
  }

  async function dispatchCreateSchool(
    input: InputCreateSchool
  ): Promise<APIResponse<null>> {
    try {
      const { status, data } = await API.school.createSchool(input)
      if (status === 200) {
        addNewSchool(data.content)
        return {
          success: true,
          content: null
        }
      }
    } catch (err) {
      const _err = err as AxiosError<string>
      return {
        success: false,
        status: _err.response?.status,
        content: null
      }
    }
    return {
      success: false,
      content: null,
      status: 400
    }
  }

  async function dispatchDeleteSchool(id: number): Promise<APIResponse<null>> {
    try {
      const { status } = await API.school.deleteSchool(id)
      if (status === 200) {
        removeSchool(id)
        return {
          success: true,
          content: null
        }
      }
    } catch (err) {
      const _err = err as AxiosError<string>
      return {
        success: false,
        status: _err.response?.status,
        content: null
      }
    }
    return {
      success: false,
      content: null,
      status: 400
    }
  }

  async function dispatchUpdateSchool(
    input: InputUpdateSchool
  ): Promise<APIResponse<null>> {
    try {
      const { status } = await API.school.updateSchool(input)
      if (status === 200) {
        return {
          success: true,
          content: null
        }
      }
    } catch (err) {
      const _err = err as AxiosError<string>
      return {
        success: false,
        status: _err.response?.status,
        content: null
      }
    }
    return {
      success: false,
      content: null,
      status: 400
    }
  }

  return {
    schools,
    initSchools,
    removeSchool,
    dispatchGetSchools,
    dispatchCreateSchool,
    dispatchDeleteSchool,
    dispatchUpdateSchool
  }

})