import {useParams} from "react-router-dom";
import {PartParam} from "../types/common.ts";

const TeamPage = () => {
   const {part} = useParams<PartParam>();

   return(
       <div>Our Team {part} </div>
   )
}

export default TeamPage;
