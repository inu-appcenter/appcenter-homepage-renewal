import { getAllParts, getAllYears } from '@/apis/generation';
import { getAllRoles } from '@/apis/role';
import BtnBox from '@/components/common/BtnBox';
import TitleBox from '@/components/common/TitleBox';
import GenDeleteModal from '@/components/generation/GenDeleteModal';
import GenPostPatchModal from '@/components/generation/GenPostPatchModal';
import GenSearch from '@/components/generation/GenSearch';
import { CATEGORY } from '@/constants/category';
import { THEME } from '@/constants/theme';
import GenerationPagination from '@/container/generation/GenerationPagination';
import { GroupEntity } from '@/types/generationType';
import { RoleEntity } from '@/types/roleType';
import { MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';

const MemberPage = () => {
  const [selectedRows, setSelectedRows] = useState<GroupEntity[]>([]);
  const [groups, setGroups] = useState<GroupEntity[]>([]);

  const [isPostBtnClick, setIsPostBtnClick] = useState(false);
  const [isPatchBtnClick, setIsPatchBtnClick] = useState(false);
  const [isDeleteBtnClick, setIsDeleteBtnClick] = useState(false);

  const [partList, setPartList] = useState<string[]>([]);
  const [yearList, setYearList] = useState<string[]>([]);
  const [roleList, setRoleList] = useState<RoleEntity[]>([]);
  const [selectedPart, setSelectedPart] = useState<string>('All Part');
  const [selectedYear, setSelectedYear] = useState<string>('All Year');

  useEffect(() => {
    const fetchPartsYears = async () => {
      try {
        const partsResponse = await getAllParts();
        const yearsResponse = await getAllYears();
        const roleResponse = await getAllRoles();
        setPartList(partsResponse.parts);
        setYearList(yearsResponse.yearList.map((year) => String(year)));
        setRoleList(roleResponse);
      } catch (error) {
        console.error('기수, 파트 목록 조회 오류', error);
      }
    };

    fetchPartsYears();
  }, []);

  const onPostBtnClick = () => {
    setIsPostBtnClick(true);
    setIsPatchBtnClick(false);
  };

  const onPatchBtnClick = () => {
    if (selectedRows.length === 0) {
      alert('수정할 동아리원을 선택해주세요.');
      return;
    }
    if (selectedRows.length > 1) {
      alert('한 명의 동아리원만 선택해주세요.');
      return;
    }
    setIsPatchBtnClick(true);
    setIsPostBtnClick(false);
  };

  const onDeleteBtnClick = () => {
    if (selectedRows.length === 0) {
      alert('삭제할 동아리원을 선택해주세요.');
      return;
    }
    if (selectedRows.length > 1) {
      alert('한 명의 동아리원만 선택해주세요.');
      return;
    }
    setIsDeleteBtnClick(!isPatchBtnClick);
  };

  const handleSearchResult = (searchResults: GroupEntity[]) => {
    setGroups(searchResults);
  };

  return (
    <>
      <TitleBox
        title={CATEGORY.CLUB_MANAGE.ORDINAL_NUMS.title}
        description={CATEGORY.CLUB_MANAGE.ORDINAL_NUMS.description}
      />

      <div className='mt-10 flex flex-col justify-center gap-4 align-middle'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-1'>
            <BtnBox text='등록' onClick={onPostBtnClick} />
            <BtnBox
              text='수정'
              color={THEME.COLORS.GREEN}
              onClick={onPatchBtnClick}
            />
            <BtnBox
              text='삭제'
              color={THEME.COLORS.RED}
              onClick={onDeleteBtnClick}
            />
          </div>
          <div className='flex gap-6'>
            <div className='flex gap-3'>
              <Select
                id='part'
                className='h-8'
                value={selectedPart}
                onChange={(e) => setSelectedPart(e.target.value)}
              >
                {[...['All Part'], ...partList].map((p) => (
                  <MenuItem key={p} value={p}>
                    {p}
                  </MenuItem>
                ))}
              </Select>
              <Select
                id='year'
                className='h-8'
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 300,
                      overflow: 'auto',
                    },
                  },
                }}
              >
                {[...['All Year'], ...yearList].map((p) => (
                  <MenuItem key={p} value={p}>
                    {p}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <GenSearch onSearchResult={handleSearchResult} />
          </div>
        </div>
        <GenerationPagination
          setSelectedRows={setSelectedRows}
          groups={groups}
          setGroups={setGroups}
          selectedPart={selectedPart}
          selectedYear={selectedYear}
        />
      </div>
      {isPostBtnClick && (
        <GenPostPatchModal
          setIsBtnClick={setIsPostBtnClick}
          isPost={true}
          isPatch={false}
          partList={partList}
          yearList={yearList}
          roleList={roleList}
        />
      )}
      {isPatchBtnClick && (
        <GenPostPatchModal
          setIsBtnClick={setIsPatchBtnClick}
          isPost={false}
          isPatch={true}
          selectedRow={selectedRows[0]}
          partList={partList}
          yearList={yearList}
          roleList={roleList}
        />
      )}
      {isDeleteBtnClick && (
        <GenDeleteModal
          selectedRow={selectedRows[0]}
          setIsDeleteBtnClick={setIsDeleteBtnClick}
        />
      )}
    </>
  );
};
export default MemberPage;
