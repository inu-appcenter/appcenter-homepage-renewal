import { PhotoEntity } from '@/types/photoType';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';

interface PhotoTableProps {
  photos: PhotoEntity[];
  setSelectedRows: (selectedPhotos: PhotoEntity[]) => void;
}

const PhotoTable = ({ photos, setSelectedRows }: PhotoTableProps) => {
  const columns: GridColDef[] = [
    { field: 'body', headerName: '본문', minWidth: 200 },
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
    const selectedPhotos = photos.filter((photo) =>
      selectionModel.includes(photo.id)
    );
    setSelectedRows(selectedPhotos);
  };

  return (
    <div className='flex w-[360px] self-center bg-white sm:w-[600px] md:w-[800px] lg:w-[1020px] 2xl:w-[1280px]'>
      <DataGrid
        rows={photos}
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

export default PhotoTable;
