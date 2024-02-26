import FAQCategoryCardList from '../../component/FAQCategoryCardList';
import { partInfo } from '../../resource/string/partInfo';

export default function FAQMainContainer() {
    return (
        <>
            <FAQCategoryCardList list={partInfo} />
        </>
    );
}
