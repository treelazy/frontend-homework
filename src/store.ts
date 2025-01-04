import { create } from 'zustand';
import { fetchClassData } from './services/getStudentsApi';

export type StoreStudentsSlice = {
  studentsInfo: {
    id: string;
    link: string;
    className: string;
    students: {
      id: number;
      name: string;
      score: number;
    }[];
  };
  totalStudents: number;
  studentsList: {
    id: number;
    name: string;
    score: number;
  }[];
  setStudentsInfo: () => void;
  setStudentsList: (id: number, score: number) => void;
};

export const useStudentsStore = create<StoreStudentsSlice>((set, get) => ({
  studentsInfo: { id: '', link: '', students: [], className: '' },
  totalStudents: 0,
  setStudentsInfo: async () => {
    const classData = await fetchClassData();

    const filteredStudents = classData.students.filter(
      (student) => student.name !== 'Guest'
    );
    set({
      studentsInfo: classData,
      totalStudents: filteredStudents.length,
      studentsList: classData.students,
    });
  },
  studentsList: [],
  setStudentsList: (id, score) => {
    const updatedStudents = get().studentsList.map((student) => {
      if (student.id === id) {
        return { ...student, score: student.score + score };
      }
      return student;
    });
    set({ studentsList: updatedStudents });
  },
}));
