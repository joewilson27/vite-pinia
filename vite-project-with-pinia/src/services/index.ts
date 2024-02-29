// The main purpose of this file is to be the only place where we can load all our different services.
import schoolController from './schools'
import courseController from './courses'
import studentsController from './students'
import teachersController from './teachers'

export const API = {
  school: schoolController,
  course: courseController,
  student: studentsController,
  teacher: teachersController
}