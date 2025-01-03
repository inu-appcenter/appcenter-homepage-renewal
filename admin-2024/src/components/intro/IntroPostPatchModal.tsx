import { patchIntroduction, postIntroduction } from '@/apis/intro';
import { deletePhoto } from '@/apis/image';
import BtnBox from '@/components/common/BtnBox';
import FormInput from '@/components/common/FormInput';
import ModalBox from '@/components/common/ModalBox';
import { THEME } from '@/constants/theme';
import { IntroductionEntity } from '@/types/introType';
import { useState } from 'react';
import FormArea from '../common/FormArea';

interface IntroPostPatchModalProps {
  isPost: boolean;
  isPatch: boolean;
  selectedRow?: IntroductionEntity | null;
  setIsBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const IntroPostPatchModal = ({
  isPost,
  isPatch,
  selectedRow,
  setIsBtnClick,
}: IntroPostPatchModalProps) => {
  const [body, setBody] = useState(selectedRow?.body || '');
  const [title, setTitle] = useState(selectedRow?.title || '');
  const [subTitle, setSubTitle] = useState(selectedRow?.subTitle || '');
  const [androidStoreLink, setAndroidStoreLink] = useState(
    selectedRow?.androidStoreLink || ''
  );
  const [appleStoreLink, setAppleStoreLink] = useState(
    selectedRow?.appleStoreLink || ''
  );

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
  // 삭제할 기존 이미지 상태
  const [deletedImageIds, setDeletedImageIds] = useState<number[]>([]);

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

  const handleDeleteExistingImage = (photo_id: number) => {
    setDeletedImageIds((prev) => [...prev, photo_id]);
    setExistingImages((prev) =>
      prev.filter((image) => image.photo_id !== photo_id)
    );
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
        photoIds.push(-Math.floor(Math.random() * 1000000)); // 새로운 이미지의 photo_id는 음수 랜덤
        multipartFiles.push(file);
      });

      // 기존 이미지 삭제
      if (deletedImageIds.length > 0) {
        await deletePhoto(deletedImageIds, selectedRow?.id || -1);
      }

      // 앱 최초 등록
      if (isPost && !isPatch) {
        await postIntroduction({
          body,
          title,
          subTitle,
          androidStoreLink,
          appleStoreLink,
          multipartFiles: multipartFiles.length > 0 ? multipartFiles : [],
        });
      }

      // 기존 앱 수정
      if (isPatch && selectedRow?.id !== undefined) {
        await patchIntroduction(
          selectedRow.id,
          {
            body,
            title,
            subTitle,
            androidStoreLink,
            appleStoreLink,
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
      {isPost && !isPatch && <p className='text-2xl font-bold'>앱 등록</p>}
      {!isPost && isPatch && <p className='text-2xl font-bold'>앱 수정</p>}
      <form
        onSubmit={validateInputs}
        className='flex w-full max-w-lg flex-col gap-4'
      >
        <FormArea
          id='body'
          label='소개'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={2}
        />
        <div className='flex w-full gap-4'>
          <FormInput
            id='title'
            label='제목'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='flex w-full gap-4'>
          <FormInput
            id='subTitle'
            label='부제목'
            type='text'
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </div>
        <div className='flex w-full gap-4'>
          <FormInput
            id='androidStoreLink'
            label='Android Store'
            type='text'
            value={androidStoreLink}
            onChange={(e) => setAndroidStoreLink(e.target.value)}
          />
        </div>
        <div className='flex w-full gap-4'>
          <FormInput
            id='appleStoreLink'
            label='Apple Store'
            type='text'
            value={appleStoreLink}
            onChange={(e) => setAppleStoreLink(e.target.value)}
          />
        </div>

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
                  <BtnBox
                    text='삭제'
                    color={THEME.COLORS.RED}
                    onClick={() => handleDeleteExistingImage(image.photo_id)}
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

export default IntroPostPatchModal;
