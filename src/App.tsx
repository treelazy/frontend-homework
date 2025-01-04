import { useEffect, useState } from 'react';
import QRCodeGenerator from '@components/QRCode';
import Student from '@app/components/Student';
import { Container, FlexContainer, Box, BoxTwo } from './styles';
import { useStudentsStore } from './store';

function App() {
  const { setStudentsInfo, studentsInfo } = useStudentsStore((state) => state);
  const [isShowBlack, setIsShowBlack] = useState<{
    qrCode: boolean;
    studentList: boolean;
  }>({
    qrCode: true,
    studentList: true,
  });

  useEffect(() => {
    setStudentsInfo();
  }, []);

  return (
    <Container>
      <FlexContainer>
        {isShowBlack.qrCode && (
          <Box>
            <QRCodeGenerator
              id={studentsInfo.id}
              link={studentsInfo.link}
              className={studentsInfo.className}
              setIsShowBlack={setIsShowBlack}
              isShowBlack={isShowBlack}
            />
          </Box>
        )}
        {isShowBlack.studentList && (
          <BoxTwo>
            <Student
              setIsShowBlack={setIsShowBlack}
              isShowBlack={isShowBlack}
            />
          </BoxTwo>
        )}
      </FlexContainer>
    </Container>
  );
}

export default App;
