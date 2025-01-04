import styled from 'styled-components';

export const QRCodeContainer = styled.div`
  padding: 20px;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 12px;
    padding: 0 8px;
  }
`;

export const QRCodeHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 10px 0;
  svg {
    width: 15px !important;
    height: 15px !important;

    @media (max-width: 480px) {
      width: 14px !important;
      height: 14px !important;
    }
  }
`;

export const QRCodeHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;
export const QRCodeHeaderRight = styled.div`
  cursor: pointer;
`;
export const QRCodeHeaderTitle = styled.div`
  font-size: 12px;
  color: #333;
  font-weight: 600;
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
export const QRCodeTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin: 0 0 20px 0;
  font-weight: 600;
  @media (max-width: 480px) {
    font-size: 16px;
    margin: 0 0 14px 0;
  }
`;

export const QRContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const QRCodeIdLink = styled.p`
  font-size: 16px;
  color: #333;
  margin: 6px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const QRCodeContentButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 8px 8px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #357abd;
  }

  &:active {
    box-shadow: none;
  }
  @media (max-width: 480px) {
    padding: 12px;
    margin-top: 16px;
  }
`;

export const QRCode = styled.div`
  background: white;
  padding: 16px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
  svg {
    width: 100% !important;
    height: auto !important;
    max-width: 300px;
    max-height: 300px;
  }
  @media (max-width: 480px) {
    padding: 12px;
    margin-top: 16px;
  }
`;
export const QRCodeVersion = styled.div`
  font-size: 12px;
  color: #333;
  font-weight: 500;
  text-align: center;
  padding: 10px;
  @media (max-width: 480px) {
    padding: 12px;
    margin-top: 16px;
  }
`;
