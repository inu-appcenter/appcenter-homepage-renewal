import React, { useState } from 'react';
import PlayStoreBadge from '@assets/svg/google-play-badge.svg';
import AppStoreBadge from '@assets/svg/app-store-badge.svg';
import { IntroductionBoardEntity } from '@api/dto/introductionBoard.ts';
import ProductDetailModal from '@components/home/product/ProductDetailModal.tsx';
import { Portal } from '@chakra-ui/react';

type ProductItemProp = {
  data: IntroductionBoardEntity;
};
const ProductItem: React.FC<ProductItemProp> = ({ data }) => {
  const { id, title, images, androidStoreLink, appleStoreLink } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalOpen = () => setIsModalOpen((prev) => !prev);

  return (
    <div className='flex flex-col gap-y-3 cursor-pointer'>
      <Portal>
        <ProductDetailModal
          id={id}
          isOpen={isModalOpen}
          onClose={toggleModalOpen}
        />
      </Portal>
      <img
        className='border border-solid rounded-2xl'
        alt={title}
        src={Object.values(images).at(0)}
        onClick={toggleModalOpen}
      />
      <div className='flex flex-col gap-y-1'>
        {androidStoreLink && (
          <a href={androidStoreLink}>
            <img
              className='px-6 w-full'
              alt={`${title} 플레이스토어 링크`}
              src={PlayStoreBadge}
            />
          </a>
        )}
        {appleStoreLink && (
          <a href={appleStoreLink}>
            <img
              className='px-6 w-full'
              alt={`${title} 앱스토어 링크`}
              src={AppStoreBadge}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
