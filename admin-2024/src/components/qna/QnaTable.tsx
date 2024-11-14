import { getAllFaq } from '@/apis/qna';
import { AllQnAResDto, QnaRes } from '@/types/qnaType';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import QnaDeleteModal from './QnaDeleteModal';
import QnaPatchModal from './QnaPatchModal';

const QnaTable = () => {
  const [faqs, setFaqs] = useState<AllQnAResDto>([]);
  const [selectedRow, setSelectedRow] = useState<QnaRes | null>(null);
  const [isPatchBtnClick, setIsPatchBtnClick] = useState(false);
  const [isDeleteBtnClick, setIsDeleteBtnClick] = useState(false);

  const columns: GridColDef[] = [
    {
      field: 'part',
      headerName: '파트',
      flex: 1,
      renderCell: (params) => (
        <div className='flex h-full w-full items-center justify-center'>
          {params.value}
        </div>
      ),
    },
    {
      field: 'question',
      headerName: '질문',
      flex: 2,
      renderCell: (params) => (
        <div className='flex h-full w-full items-center whitespace-pre-wrap break-words'>
          {params.value}
        </div>
      ),
    },
    {
      field: 'answer',
      headerName: '답변',
      flex: 3,
      renderCell: (params) => (
        <div className='flex h-full w-full items-center whitespace-pre-wrap break-words p-2'>
          {params.value}
        </div>
      ),
    },
    {
      field: 'actions',
      headerName: '수정·삭제',
      flex: 1,
      renderCell: (params) => (
        <div className='flex h-full w-full items-center justify-center'>
          <IconButton
            onClick={() => {
              setSelectedRow(params.row);
              setIsPatchBtnClick(true);
            }}
          >
            <DriveFileRenameOutlineIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setSelectedRow(params.row);
              setIsDeleteBtnClick(true);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await getAllFaq();
        setFaqs(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <>
      <Paper sx={{ width: '100%' }}>
        <div className='w-full sm:min-w-[780px]'>
          <DataGrid
            rows={faqs}
            columns={columns}
            getRowHeight={() => 'auto'}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10, 25, 100]}
            disableMultipleRowSelection
            hideFooterSelectedRowCount
          />
        </div>
      </Paper>
      {isPatchBtnClick && (
        <QnaPatchModal
          setIsPatchBtnClick={setIsPatchBtnClick}
          selectedRow={selectedRow}
        />
      )}
      {isDeleteBtnClick && (
        <QnaDeleteModal
          setIsDeleteBtnClick={setIsDeleteBtnClick}
          selectedRow={selectedRow}
        />
      )}
    </>
  );
};

export default QnaTable;
