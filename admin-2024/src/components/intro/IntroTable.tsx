import { IntroductionEntity } from '@/types/introType';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';

interface IntroTableProps {
  introductions: IntroductionEntity[];
  setSelectedRows: (selectedIntroductions: IntroductionEntity[]) => void;
}

const IntroTable = ({ introductions, setSelectedRows }: IntroTableProps) => {
  const columns: GridColDef[] = [
    { field: 'title', headerName: '제목', minWidth: 160 },
    { field: 'subTitle', headerName: '부제목', minWidth: 200 },
    { field: 'body', headerName: '소개', minWidth: 200 },
    { field: 'androidStoreLink', headerName: 'Android Store', minWidth: 160 },
    { field: 'appleStoreLink', headerName: 'Apple Store', minWidth: 160 },
    {
      field: 'images',
      headerName: '이미지',
      minWidth: 1000,
      sortable: false,
      renderCell: (params) => {
        const images = params.value as Record<number, string>;

        return (
          <div className='flex flex-wrap gap-2'>
            {Object.entries(images).map(([id, url]) => (
              <img
                key={id}
                src={url}
                alt={`이미지 ${id}`}
                style={{
                  maxHeight: '200px',
                  cursor: 'pointer',
                }}
                onClick={() => window.open(url, '_blank')}
              />
            ))}
          </div>
        );
      },
    },
  ];

  const handleSelectionChange = (selectionModel: GridRowSelectionModel) => {
    const selectedIntroductions = introductions.filter((introduction) =>
      selectionModel.includes(introduction.id)
    );
    setSelectedRows(selectedIntroductions);
  };

  return (
    <div className='flex w-[360px] self-center bg-white sm:w-[600px] md:w-[800px] lg:w-[1020px] 2xl:w-[1280px]'>
      <DataGrid
        rows={introductions}
        columns={columns}
        getRowId={(row) => row.id}
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

export default IntroTable;
