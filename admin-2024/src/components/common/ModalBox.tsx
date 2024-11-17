import ModalPortal from '@/utils/modalPortal';
import React from 'react';

const ModalBox = ({ children }: { children: React.ReactNode }) => (
  <ModalPortal>
    <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/50'>
      <div className='flex w-full max-w-xl flex-col items-center justify-center gap-6 rounded-lg bg-white p-6 shadow-lg'>
        {children}
      </div>
    </div>
  </ModalPortal>
);

export default ModalBox;
