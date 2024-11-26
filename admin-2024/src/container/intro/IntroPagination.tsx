import { getAllIntroduction } from '@/apis/intro';
import CustomPagination from '@/components/common/CustomPagination';
import IntroTable from '@/components/intro/IntroTable';
import { IntroductionEntity } from '@/types/introType';
import { useEffect, useState } from 'react';

interface IntroPaginationProps {
  setSelectedRows: (selectedIntroductions: IntroductionEntity[]) => void;
  introductions: IntroductionEntity[];
  setIntroductions: (introductions: IntroductionEntity[]) => void;
}

const IntroPagination = ({
  setSelectedRows,
  introductions,
  setIntroductions,
}: IntroPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  useEffect(() => {
    const fetchIntroductions = async () => {
      try {
        const response = await getAllIntroduction();
        setIntroductions(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (introductions.length === 0) {
      fetchIntroductions();
    }
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [introductions]);

  const handlePageChange = (_: unknown, page: number) => {
    setCurrentPage(page);
  };

  const paginatedIntroductions = introductions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <IntroTable
        introductions={paginatedIntroductions}
        setSelectedRows={setSelectedRows}
      />
      <CustomPagination
        totalPage={Math.ceil(introductions.length / pageSize)}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

export default IntroPagination;
