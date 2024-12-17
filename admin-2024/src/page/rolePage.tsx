import BtnBox from '@/components/common/BtnBox';
import TitleBox from '@/components/common/TitleBox';
import RolePostModal from '@/components/role/RolePostModal';
import RoleTable from '@/components/role/RoleTable';
import { CATEGORY } from '@/constants/category';
import { useState } from 'react';

const RolePage = () => {
  const [isPostBtnClick, setIsPostBtnClick] = useState(false);
  const onPostBtnClick = () => {
    setIsPostBtnClick(!isPostBtnClick);
  };

  return (
    <>
      <TitleBox
        title={CATEGORY.CLUB_MANAGE.ROLE.title}
        description={CATEGORY.CLUB_MANAGE.ROLE.description}
      />
      <div className='mt-10 flex flex-col justify-center align-middle'>
        <div className='mb-4 flex flex-row justify-between'>
          <p className='text-xl'>역할 목록</p>
          <div className='flex flex-row gap-1'>
            <BtnBox text='등록' onClick={onPostBtnClick} />
          </div>
        </div>
        <RoleTable />
      </div>
      {isPostBtnClick && (
        <RolePostModal setIsPostBtnClick={setIsPostBtnClick} />
      )}
    </>
  );
};
export default RolePage;
