import FAQCategoryCardList from "../component/FAQCategoryCardList";
import {faqString} from "../resource/string/faqString";

export default function FAQMainContainer(){
    return(
        <>
            <FAQCategoryCardList
                list={faqString}
            />
        </>
    );
}