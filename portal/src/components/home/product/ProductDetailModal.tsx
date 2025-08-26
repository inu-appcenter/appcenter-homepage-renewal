import {
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import useGetIntroductionBoardPublicAllQuery from '@api/query/useGetIntroductionBoardPublicByIdQuery.ts';

type ProductDetailModalProps = {
  id: number;
  isOpen: boolean;
  onClose: () => void;
};
const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  id,
  isOpen,
  onClose,
}) => {
  const { data } = useGetIntroductionBoardPublicAllQuery({ id });

  const { title, subTitle, body, images } = data;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent
        className="relative mx-4"
        maxW="48rem"
        maxH="90vh"   // 화면 높이 제한
      >
        <ModalCloseButton />
        <div className="overflow-y-auto px-4 py-8 pl-36">
          <Image
            className="absolute -top-0 -translate-y-1/2 left-4 rounded-2xl"
            alt={`${title} 앱 아이콘`}
            src={Object.values(images).at(0)}
            width={100}
          />
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-6">
              <div>
                <p className="font-semibold text-3xl">{title}</p>
                <p className="text-grayscale-600">{subTitle}</p>
              </div>
              <p className="whitespace-pre-line">{body}</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              {Object.values(images)
                .slice(1)
                .map((image) => (
                  <Image
                    key={image}
                    className="rounded-2xl w-full sm:w-44"
                    src={image}
                  />
                ))}
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>

  );
};

export default ProductDetailModal;
