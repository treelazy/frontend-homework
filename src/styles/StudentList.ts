import styled from 'styled-components';

export const StudentHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 10px 0 0;
  svg {
    width: 15px !important;
    height: 15px !important;
  }
`;

export const StudentHeaderRight = styled.div`
  cursor: pointer;
`;

export const StudentClassContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StudentClassName = styled.div`
  font-size: 20px;
  color: #333;
  font-weight: 600;
  margin-left: 20px;
`;

export const StudentTabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 15px !important;
    height: 15px !important;
  }
`;

export const StudentTabsMoreContent = styled.div`
  padding-right: 10px;
  cursor: pointer;
  position: relative;
`;

export const StudentTabsTooltip = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #333;
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 10;
  margin-top: 8px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
  }

  ${StudentTabsMoreContent}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;
export const StudentTabs = styled.div`
  margin-left: 20px;
  display: flex;
  div {
    min-width: 90px;
    margin-right: 10px;
    padding: 10px 20px;
    border-radius: 10px 10px 0 0;
    border: none;
    background-color: #adadad;
    color: #fff;
    cursor: pointer;
    text-align: center;
    &.is-active {
      background-color: white;
      color: #84c1ff;
    }
  }
`;

export const StudentContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 4px 1px 2px 5px #d0d0d0;
  min-height: 400px;
`;

export const StudentItem = styled.div`
  background: white;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #97cbff;
  &.empty {
    border: 1px solid #adadad;
  }
`;

export const StudentId = styled.div`
  min-width: 40px;
  font-weight: 500;
  color: white;
  background-color: #97cbff;
  border-radius: 8px 8px 0 0;
  &.disabled {
    background-color: #cccccc;
  }
`;

export const StudentName = styled.div`
  flex: 1;
  font-weight: 500;
  color: #333;
  padding: 20px 10px;
  border-bottom: 1px solid #97cbff;
  &.disabled {
    color: #cccccc;
    border-bottom: 1px solid #cccccc;
  }
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ScoreButton = styled.button<{ isDecrease?: boolean }>`
  background-color: ${(props) => (props.isDecrease ? '#ff4d4f' : '#52c41a')};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  margin: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &.disabled {
    border-radius: 4px;
    background-color: #cccccc;
  }
`;

export const ScoreText = styled.span`
  min-width: 24px;
  text-align: center;
  font-weight: 600;
  color: #333;
  font-size: 16px;

  &.disabled {
    color: #cccccc;
  }
`;
