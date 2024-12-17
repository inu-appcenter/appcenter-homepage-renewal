import { GroupEntity } from '@/types/generationType';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';

interface GenTableProps {
  groups: GroupEntity[];
  setSelectedRows: (selectedGroupsMembers: GroupEntity[]) => void;
}

const GenTable = ({ groups, setSelectedRows }: GenTableProps) => {
  const columns: GridColDef[] = [
    { field: 'member', headerName: '이름', minWidth: 100 },
    { field: 'email', headerName: '이메일', minWidth: 200 },
    { field: 'role', headerName: '역할', minWidth: 100 },
    { field: 'part', headerName: '파트', minWidth: 100 },
    { field: 'year', headerName: '기수', minWidth: 80 },
  ];

  const handleSelectionChange = (selectionModel: GridRowSelectionModel) => {
    const selectedGroups = groups.filter((group) =>
      selectionModel.includes(group.group_id)
    );
    setSelectedRows(selectedGroups);
  };

  return (
    <div className='flex w-[360px] self-center bg-white sm:w-[600px] md:w-[800px] lg:w-[1020px] 2xl:w-[1280px]'>
      <DataGrid
        rows={groups}
        columns={columns}
        getRowId={(row) => row.group_id}
        getRowHeight={() => 'auto'}
        checkboxSelection
        hideFooter
        onRowSelectionModelChange={handleSelectionChange}
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

export default GenTable;
