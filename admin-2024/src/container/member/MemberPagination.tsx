import { getAllMember } from '@/apis/member';
import CustomPagination from '@/components/common/CustomPagination';
import MemTable from '@/components/member/MemTable';
import { MemberEntity } from '@/types/memberType';
import { useEffect, useState } from 'react';

interface MemberPaginationProps {
  setSelectedRows: (selectedMembers: MemberEntity[]) => void;
  members: MemberEntity[];
  setMembers: (members: MemberEntity[]) => void;
}

const MemberPagination = ({
  setSelectedRows,
  members,
  setMembers,
}: MemberPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await getAllMember();
        setMembers(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (members.length === 0) {
      fetchMembers();
    }
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [members]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const paginatedMembers = members.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <MemTable members={paginatedMembers} setSelectedRows={setSelectedRows} />
      <CustomPagination
        totalPage={Math.ceil(members.length / pageSize)}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

export default MemberPagination;
