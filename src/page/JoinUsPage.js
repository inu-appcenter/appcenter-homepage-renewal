import JoinUsMainContainer from "../container/joinjs/JoinUsMainContainer";
import ArchiveContainer from "../container/joinjs/ArchiveContainer";
import RegisterStepContainer from "../container/joinjs/RegisterStepContainer";
import ContactContainer from "../container/joinjs/ContactContainer";

export default function JoinUsPage(){
    return(
        <>
            <JoinUsMainContainer/>
            <ArchiveContainer/>
            <RegisterStepContainer/>
            <ContactContainer />
        </>
    );
}
