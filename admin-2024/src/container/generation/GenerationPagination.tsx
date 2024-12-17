import { getAllGroupsMembers } from '@/apis/generation';
import CustomPagination from '@/components/common/CustomPagination';
import GenTable from '@/components/generation/GenTable';
import { GroupEntity } from '@/types/generationType';
import { useEffect, useState } from 'react';

interface GenerationPaginationProps {
  setSelectedRows: (selectedGroupsMembers: GroupEntity[]) => void;
  groups: GroupEntity[];
  setGroups: (groups: GroupEntity[]) => void;
  selectedPart: string;
  selectedYear: string;
}

const GenerationPagination = ({
  setSelectedRows,
  groups,
  setGroups,
  selectedPart,
  selectedYear,
}: GenerationPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchGroupsMembers = async () => {
      try {
        const params: { year?: number; part?: string } = {};
        if (selectedYear !== 'All Year') {
          params.year = Number(selectedYear);
        }
        if (selectedPart !== 'All Part') {
          params.part = selectedPart;
        }
        console.log(params);
        const response = await getAllGroupsMembers(params.year, params.part);
        setGroups(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGroupsMembers();
  }, [selectedPart, selectedYear]);

  useEffect(() => {
    setCurrentPage(1);
  }, [groups]);

  const handlePageChange = (_: unknown, page: number) => {
    setCurrentPage(page);
  };

  const paginatedGroups = groups.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <GenTable groups={paginatedGroups} setSelectedRows={setSelectedRows} />
      <CustomPagination
        totalPage={Math.ceil(groups.length / pageSize)}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

export default GenerationPagination;
