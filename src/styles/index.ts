import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1200px;
  height: 90vh;
  border-radius: 8px;
`;

export const FlexContainer = styled.div`
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  flex: 1;
  min-height: 200px;
  max-height: 80vh;
  background: #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BoxTwo = styled(Box)`
  flex: 2;
`;
