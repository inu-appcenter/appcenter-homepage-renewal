import { MemberEntity } from '@/types/memberType';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface MemTableProps {
  members: MemberEntity[];
}

const MemTable = ({ members }: MemTableProps) => {
  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: '이름',
      flex: 2,
      renderCell: (params) => (
        <div className='flex h-full w-full items-center whitespace-pre-wrap break-words'>
          {params.value}
        </div>
      ),
    },
    {
      field: 'phoneNumber',
      headerName: '전화번호',
      flex: 2,
      renderCell: (params) => (
        <div className='flex h-full w-full items-center whitespace-pre-wrap break-words'>
          {params.value}
        </div>
      ),
    },
    {
      field: 'email',
      headerName: '이메일',
      flex: 3,
      renderCell: (params) => (
        <div className='flex h-full w-full items-center whitespace-pre-wrap break-words'>
          {params.value}
        </div>
      ),
    },
    {
      field: 'gitRepositoryLink',
      headerName: '깃허브',
      flex: 3,
      renderCell: (params) => (
        <div className='flex h-full w-full items-center whitespace-pre-wrap break-words'>
          {params.value}
        </div>
      ),
    },
    {
      field: 'profileImage',
      headerName: '프로필',
      flex: 1.5,
      renderCell: (params) => (
        <div className='flex h-full w-full items-center whitespace-pre-wrap break-words'>
          {params.value}
        </div>
      ),
    },
    {
      field: 'blogLink',
      headerName: '블로그',
      flex: 1.5,
      renderCell: (params) => (
        <div className='flex h-full w-full items-center whitespace-pre-wrap break-words'>
          {params.value}
        </div>
      ),
    },
    {
      field: 'behanceLink',
      headerName: '비헨스',
      flex: 1.5,
      renderCell: (params) => (
        <div className='flex h-full w-full items-center whitespace-pre-wrap break-words'>
          {params.value}
        </div>
      ),
    },
    {
      field: 'description',
      headerName: '소개말',
      flex: 1.5,
      renderCell: (params) => (
        <div className='flex h-full w-full items-center whitespace-pre-wrap break-words'>
          {params.value}
        </div>
      ),
    },
    {
      field: 'studentNumber',
      headerName: '학번',
      flex: 1,
      renderCell: (params) => (
        <div className='flex h-full w-full items-center whitespace-pre-wrap break-words'>
          {params.value}
        </div>
      ),
    },
    {
      field: 'department',
      headerName: '학부',
      flex: 1.5,
      renderCell: (params) => (
        <div className='flex h-full w-full items-center whitespace-pre-wrap break-words'>
          {params.value}
        </div>
      ),
    },
  ];

  return (
    <Paper sx={{ width: '100%' }}>
      <div className='w-full lg:min-w-[1020px]'>
        <DataGrid
          rows={members}
          columns={columns}
          getRowId={(row) => row.member_id}
          getRowHeight={() => 'auto'}
          checkboxSelection
          hideFooter
        />
      </div>
    </Paper>
  );
};

export default MemTable;
