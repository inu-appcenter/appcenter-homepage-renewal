import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface CustomPaginationProps {
  totalPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  currentPage: number;
}

const CustomPagination = ({
  totalPage,
  onPageChange,
  currentPage,
}: CustomPaginationProps) => {
  return (
    <Stack spacing={2} alignItems='center' sx={{ marginTop: 2 }}>
      <Pagination
        count={totalPage}
        page={currentPage}
        onChange={onPageChange}
        sx={{
          '& .MuiPaginationItem-root': {
            '&.Mui-selected': {
              backgroundColor: '#2761DE',
              color: '#fff',
            },
          },
        }}
      />
    </Stack>
  );
};

export default CustomPagination;
