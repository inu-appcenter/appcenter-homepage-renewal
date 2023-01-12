import {Link, Outlet} from "react-router-dom";

export default function SubPage(){
    return(
        <>
            <div style={{border: 'solid', display: 'flex'}}>
                <h1>AppCenter</h1>
                <Link to='/'>Home</Link>
                <Link to='./join'>Join Us</Link>
                <Link to='./faq'>FAQ</Link>
                <Link to='./faq/detail'>FAQ Detail</Link>
            </div>
            <Outlet/>
        </>
    );
}