import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'rohan', age: 12 },
    { id: 2, name: 'sohan', age: 13 },
    { id: 3, name: 'mohan', age: 14 },
    { id: 4, name: 'raju', age: 15 },
  ];

  getAllStudents() {
    return this.students;
  }

  // GET
  getStudentByID(id: number) {
    const student = this.students.find((s) => s.id === id);
    if (!student) throw new NotFoundException('Student Not Found');
    return student;
  }

  // POST
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };

    this.students.push(newStudent);
    return newStudent;
  }

  // PUT
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student not found');
    this.students[index] = { id, ...data };
    return this.students[index];
  }

  //PATCH
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentByID(id);
    Object.assign(student, data);
    return student;
  }

  //DELETE
  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student not found');
    const deleted = this.students.splice(index, 1);

    return { message: 'student data deleted', student: deleted[0] };
  }
}
