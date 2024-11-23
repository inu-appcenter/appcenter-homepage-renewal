import { MemberEntity } from '@/types/memberType';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface MemTableProps {
  members: MemberEntity[];
}

const MemTable = ({ members }: MemTableProps) => {
  const columns: GridColDef[] = [
    { field: 'name', headerName: '이름', minWidth: 100 },
    { field: 'phoneNumber', headerName: '전화번호', minWidth: 160 },
    { field: 'email', headerName: '이메일', minWidth: 180 },
    { field: 'gitRepositoryLink', headerName: '깃허브', minWidth: 200 },
    { field: 'profileImage', headerName: '프로필', minWidth: 150 },
    { field: 'blogLink', headerName: '블로그', minWidth: 150 },
    { field: 'behanceLink', headerName: '비헨스', minWidth: 150 },
    { field: 'description', headerName: '소개말', minWidth: 200 },
    { field: 'studentNumber', headerName: '학번', minWidth: 120 },
    { field: 'department', headerName: '학부', minWidth: 150 },
  ];

  return (
    <div className='flex w-[360px] self-center bg-white sm:w-[600px] md:w-[800px] lg:w-[1020px] 2xl:w-[1280px]'>
      <DataGrid
        rows={members}
        columns={columns}
        getRowId={(row) => row.member_id}
        getRowHeight={() => 'auto'}
        checkboxSelection
        hideFooter
        sx={{
          '.MuiDataGrid-cell': {
            display: 'flex',
            alignItems: 'center',
          },
        }}
      />
    </div>
  );
};

export default MemTable;
