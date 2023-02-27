import PartContainer from "../container/ourteam/PartContainer";
import {PageTitle} from "../component/common/PageTitle";
import {PartChip} from "../component/common/PartChip";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

export default function OurTeamPage() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <>
            <PageTitle
                title="Our Team"
                bottomMargin='36px'
            />
            <PartChip
                common={false}
                url={location.pathname}
                onButtonClick={(e, part) => navigate(part)}
            />
            <Outlet/>
        </>
    )
}
