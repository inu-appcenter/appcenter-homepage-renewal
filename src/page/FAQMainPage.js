import {PageTitle} from "../component/common/PageTitle";
import FAQMainContainer from "../container/faq/FAQMainContainer";
import FAQSpeechBubble from "../component/FAQSpeechBubble";

export default function FAQMainPage(){
    return(
        <>
            <PageTitle
                title="FAQ"
            />
            <FAQSpeechBubble/>
            <FAQMainContainer/>
        </>
    );
}
