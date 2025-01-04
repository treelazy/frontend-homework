import React from 'react';
import { useStudentsStore } from '@app/store';
import { StudentContainer } from '@app/styles/StudentList';

const getGroupByScore = (studentsList) => {
  return {
    '1-5': studentsList.filter((s) => s.score >= 1 && s.score <= 5),
    '6-10': studentsList.filter((s) => s.score >= 6 && s.score <= 10),
    '11-15': studentsList.filter((s) => s.score >= 11 && s.score <= 15),
    '16-20': studentsList.filter((s) => s.score >= 16 && s.score <= 20),
    other: studentsList.filter((s) => s.score > 20),
  };
};
const Group = () => {
  const { studentsList } = useStudentsStore((state) => state);
  const groupByScore = getGroupByScore(studentsList);
  return (
    <StudentContainer>
      {Object.keys(groupByScore).map((key, index) => {
        return (
          <div key={index}>
            <h3>Group {key}</h3>
            {groupByScore[key].length === 0 && <div>Empty</div>}
            {groupByScore[key].map((student) => (
              <div key={student.id}>{student.name}</div>
            ))}
          </div>
        );
      })}
    </StudentContainer>
  );
};

export default Group;
