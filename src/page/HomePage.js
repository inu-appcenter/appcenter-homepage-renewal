import {Link} from "react-router-dom";
import Header from "../component/common/Header";

export default function HomePage(){
  return(
    <>
      <Header />
      <h1>홈 페이지 입니다.</h1>
      <p>피그마에서 Desktop 1에 해당하는 부분입니다.</p>
      <div style={{border: 'solid', display: 'flex'}}>
        <h1>AppCenter</h1>
        <Link to='/'>Home</Link>
        <Link to='sub/join'>Join Us</Link>
        <Link to='sub/faq'>FAQ</Link>
        <Link to='sub/faq/detail'>FAQ Detail</Link>
      </div>
    </>
  );
}
