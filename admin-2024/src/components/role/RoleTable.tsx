import { getAllRoles } from '@/apis/role';
import { RoleEntity } from '@/types/roleType';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import RoleDeleteModal from './RoleDeleteModal';
import RolePatchModal from './RolePatchModal';

const RoleTable = () => {
  const [roles, setRoles] = useState<RoleEntity[]>([]);
  const [selectedRow, setSelectedRow] = useState<RoleEntity | null>(null);
  const [isPatchBtnClick, setIsPatchBtnClick] = useState(false);
  const [isDeleteBtnClick, setIsDeleteBtnClick] = useState(false);

  const columns: GridColDef[] = [
    {
      field: 'roleName',
      headerName: '역할',
      flex: 1,
      renderCell: (params) => (
        <div className='flex h-full w-full items-center justify-center'>
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
    const fetchRoles = async () => {
      try {
        const response = await getAllRoles();
        setRoles(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoles();
  }, []);

  return (
    <>
      <Paper sx={{ width: '100%' }}>
        <div className='w-full sm:min-w-[780px]'>
          <DataGrid
            rows={roles}
            columns={columns}
            getRowId={(row) => row.roleId}
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
        <RolePatchModal
          setIsPatchBtnClick={setIsPatchBtnClick}
          selectedRow={selectedRow}
        />
      )}
      {isDeleteBtnClick && (
        <RoleDeleteModal
          setIsDeleteBtnClick={setIsDeleteBtnClick}
          selectedRow={selectedRow}
        />
      )}
    </>
  );
};

export default RoleTable;
