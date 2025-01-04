import { useState } from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import { FaX } from 'react-icons/fa6';
import Group from '@components/Group';
import { useStudentsStore } from '@app/store';
import StudentList from './StudentList';
import {
  StudentClassName,
  StudentClassContainer,
  StudentHeaderContainer,
  StudentHeaderRight,
} from '@app/styles/StudentList';
import Tabs from './Tabs';

type StudentProps = {
  setIsShowBlack: (isShowBlack: {
    qrCode: boolean;
    studentList: boolean;
  }) => void;
  isShowBlack: {
    qrCode: boolean;
    studentList: boolean;
  };
};
const Student = ({ setIsShowBlack, isShowBlack }: StudentProps) => {
  const { studentsInfo, totalStudents } = useStudentsStore((state) => state);
  const [activeTab, setActiveTab] = useState('StudentList');
  const { className, students } = studentsInfo;

  return (
    <>
      <StudentHeaderContainer>
        <StudentHeaderRight
          onClick={() => setIsShowBlack({ ...isShowBlack, studentList: false })}
        >
          <FaX />
        </StudentHeaderRight>
      </StudentHeaderContainer>
      <StudentClassContainer>
        <StudentClassName>{className}</StudentClassName>
        <IoPersonSharp />
        <p>{`${totalStudents}/${students.length}`}</p>
      </StudentClassContainer>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'StudentList' && <StudentList />}
      {activeTab === 'Group' && <Group />}
    </>
  );
};

export default Student;
