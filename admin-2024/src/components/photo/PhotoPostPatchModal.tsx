import { patchPhoto, postPhoto } from '@/apis/photo';
import BtnBox from '@/components/common/BtnBox';
// import FormInput from '@/components/common/FormInput';
import ModalBox from '@/components/common/ModalBox';
import { THEME } from '@/constants/theme';
import { PhotoEntity } from '@/types/photoType';
import { useState } from 'react';
import FormArea from '../common/FormArea';

interface PhotoPostPatchModalProps {
  isPost: boolean;
  isPatch: boolean;
  selectedRow?: PhotoEntity | null;
  setIsBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const PhotoPostPatchModal = ({
  isPost,
  isPatch,
  selectedRow,
  setIsBtnClick,
}: PhotoPostPatchModalProps) => {
  const [body, setBody] = useState(selectedRow?.body || '');

  // 기존 이미지 상태
  const [existingImages, setExistingImages] = useState<
    { photo_id: number; url: string; file?: File; isModified: boolean }[]
  >(
    selectedRow
      ? Object.entries(selectedRow.images).map(([photo_id, url]) => ({
          photo_id: Number(photo_id),
          url,
          isModified: false,
        }))
      : []
  );

  // 새로운 이미지 상태
  const [newImages, setNewImages] = useState<File[]>([]);
  const [newImagePreviews, setNewImagePreviews] = useState<string[]>([]);

  const handleReplaceExistingImage = (index: number) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setExistingImages((prevImages) => {
            const newImages = [...prevImages];
            newImages[index] = {
              ...newImages[index],
              url: reader.result as string,
              file: file,
              isModified: true,
            };
            return newImages;
          });
        };
        reader.readAsDataURL(file);
      }
    };

    input.click();
  };

  const handleAddNewImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setNewImages((prev) => [...prev, ...fileArray]);

      // 미리보기 생성
      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewImagePreviews((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleDeleteNewImage = (index: number) => {
    setNewImages((prev) => prev.filter((_, i) => i !== index));
    setNewImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const validateInputs = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const photoIds: number[] = [];
      const multipartFiles: File[] = [];

      existingImages.forEach((img) => {
        if (img.isModified && img.file) {
          photoIds.push(img.photo_id);
          multipartFiles.push(img.file);
        }
      });
      newImages.forEach((file) => {
        photoIds.push(-1); // 새로운 이미지의 photo_id는 -1
        multipartFiles.push(file);
      });

      // 앱 최초 등록
      if (isPost && !isPatch) {
        await postPhoto({
          body,
          multipartFiles: multipartFiles.length > 0 ? multipartFiles : [],
        });
      }

      // 기존 앱 수정
      if (isPatch && selectedRow?.id !== undefined) {
        await patchPhoto(
          selectedRow.id,
          {
            body,
            multipartFiles: multipartFiles.length > 0 ? multipartFiles : [],
          },
          photoIds.length > 0 ? photoIds : []
        );
      }

      setIsBtnClick(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalBox>
      {isPost && !isPatch && <p className='text-2xl font-bold'>사진 등록</p>}
      {!isPost && isPatch && <p className='text-2xl font-bold'>사진 수정</p>}
      <form
        onSubmit={validateInputs}
        className='flex w-full max-w-lg flex-col gap-4'
      >
        <FormArea
          id='body'
          label='본문'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={2}
        />

        {/* 기존 이미지 표시 */}
        {existingImages.length > 0 && (
          <div className='flex flex-col gap-2'>
            <label className='font-medium'>이미지 수정</label>
            <div className='flex flex-wrap gap-2'>
              {existingImages.map((image, index) => (
                <div key={image.photo_id} className='relative'>
                  <img
                    src={image.url}
                    alt={`이미지 ${image.photo_id}`}
                    className='h-24 w-24 cursor-pointer rounded object-cover'
                    onClick={() => handleReplaceExistingImage(index)}
                  />
                  <span className='text-sm'>ID: {image.photo_id}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 새로운 이미지 추가 */}
        <div className='flex flex-col gap-2'>
          <label className='font-medium'>이미지 추가</label>
          <input
            type='file'
            accept='image/*'
            multiple
            onChange={handleAddNewImages}
          />
          <div className='flex flex-wrap gap-2'>
            {newImagePreviews.map((url, index) => (
              <div key={index} className='relative'>
                <img
                  src={url}
                  alt={`새 이미지 ${index}`}
                  className='h-24 w-24 rounded object-cover'
                />
                <button
                  type='button'
                  onClick={() => handleDeleteNewImage(index)}
                  className='absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-sm text-white'
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-row justify-center gap-2'>
          {isPost && <BtnBox text='등록' />}
          {isPatch && <BtnBox text='수정' color={THEME.COLORS.GREEN} />}
          <BtnBox
            text='취소'
            color={THEME.COLORS.GRAY}
            onClick={() => {
              setIsBtnClick(false);
            }}
          />
        </div>
      </form>
    </ModalBox>
  );
};

export default PhotoPostPatchModal;
