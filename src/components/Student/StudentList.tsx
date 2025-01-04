import React from 'react';
import {
  StudentContainer,
  StudentItem,
  StudentId,
  StudentName,
  ScoreContainer,
  ScoreButton,
  ScoreText,
} from '@app/styles/StudentList';
import { useStudentsStore } from '@app/store';

const StudentList = () => {
  const { setStudentsList, studentsList } = useStudentsStore((state) => state);
  const handleScoreChange = (id, score) => {
    setStudentsList(id, score);
  };
  return (
    <StudentContainer>
      {studentsList.map((student) => {
        const isGuest = student.name === 'Guest';
        const isZero = student.score === 0;
        return (
          <StudentItem key={student.id} className={isGuest ? 'empty' : ''}>
            <StudentId className={isGuest ? 'disabled' : ''}>
              {student.id}
            </StudentId>
            <StudentName className={isGuest ? 'disabled' : ''}>
              {student.name}
            </StudentName>
            <ScoreContainer>
              <ScoreButton
                isDecrease
                className={isZero || isGuest ? 'disabled' : ''}
                disabled={isZero || isGuest}
                onClick={() => handleScoreChange(student.id, -1)}
              >
                -1
              </ScoreButton>
              <ScoreText className={isGuest ? 'disabled' : ''}>
                {student.score}
              </ScoreText>
              <ScoreButton
                className={isGuest ? 'disabled' : ''}
                disabled={isGuest}
                onClick={() => handleScoreChange(student.id, 1)}
              >
                +1
              </ScoreButton>
            </ScoreContainer>
          </StudentItem>
        );
      })}
    </StudentContainer>
  );
};

export default StudentList;
