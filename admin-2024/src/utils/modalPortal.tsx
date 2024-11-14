import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalPortalProps {
  children: ReactNode;
  targetId?: string;
}

const ModalPortal: React.FC<ModalPortalProps> = ({
  children,
  targetId = 'modal',
}) => {
  const el = document.getElementById(targetId);

  if (!el) {
    return null;
  }

  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
