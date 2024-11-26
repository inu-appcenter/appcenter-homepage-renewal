import { getAllPhoto } from '@/apis/photo';
import CustomPagination from '@/components/common/CustomPagination';
import PhotoTable from '@/components/photo/PhotoTable';
import { PhotoEntity } from '@/types/photoType';
import { useEffect, useState } from 'react';

interface PhotoPaginationProps {
  setSelectedRows: (selectedIntroductions: PhotoEntity[]) => void;
  photos: PhotoEntity[];
  setPhotos: (photos: PhotoEntity[]) => void;
}

const IntroPagination = ({
  setSelectedRows,
  photos,
  setPhotos,
}: PhotoPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await getAllPhoto();
        setPhotos(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (photos.length === 0) {
      fetchPhotos();
    }
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [photos]);

  const handlePageChange = (_: unknown, page: number) => {
    setCurrentPage(page);
  };

  const paginatedPhotos = photos.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <PhotoTable photos={paginatedPhotos} setSelectedRows={setSelectedRows} />
      <CustomPagination
        totalPage={Math.ceil(photos.length / pageSize)}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

export default IntroPagination;
