import React from 'react';
import { FaRegCopy, FaChevronLeft, FaX } from 'react-icons/fa6';
import { QRCodeSVG } from 'qrcode.react';
import {
  QRCodeContainer,
  QRCodeHeaderContainer,
  QRCodeHeaderLeft,
  QRCodeHeaderRight,
  QRCodeHeaderTitle,
  QRContent,
  QRCodeIdLink,
  QRCodeContentButton,
  QRCode,
  QRCodeTitle,
  QRCodeVersion,
} from '@app/styles/QRCode';

type QRCodeGeneratorProps = {
  id: string;
  link: string;
  className: string;
  setIsShowBlack: (isShowBlack: {
    qrCode: boolean;
    studentList: boolean;
  }) => void;
  isShowBlack: {
    qrCode: boolean;
    studentList: boolean;
  };
};
const QRCodeGenerator = ({
  id,
  link,
  className,
  setIsShowBlack,
  isShowBlack,
}: QRCodeGeneratorProps) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <QRCodeContainer>
      <QRCodeHeaderContainer>
        <QRCodeHeaderLeft>
          <FaChevronLeft />
          <QRCodeHeaderTitle>Back to Class List</QRCodeHeaderTitle>
        </QRCodeHeaderLeft>
        <QRCodeHeaderRight
          onClick={() => setIsShowBlack({ ...isShowBlack, qrCode: false })}
        >
          <FaX />
        </QRCodeHeaderRight>
      </QRCodeHeaderContainer>
      <QRCodeTitle>{className}</QRCodeTitle>
      <QRContent>
        <QRCodeIdLink>ID: {id}</QRCodeIdLink>
        <QRCodeContentButton onClick={() => copyToClipboard(id)}>
          <FaRegCopy />
        </QRCodeContentButton>
        <QRCodeIdLink>Link</QRCodeIdLink>
        <QRCodeContentButton onClick={() => copyToClipboard(link)}>
          <FaRegCopy />
        </QRCodeContentButton>
      </QRContent>
      <QRCode>
        <QRCodeSVG value={link} />
      </QRCode>
      <QRCodeVersion>Version 1.1.7</QRCodeVersion>
    </QRCodeContainer>
  );
};

export default QRCodeGenerator;
