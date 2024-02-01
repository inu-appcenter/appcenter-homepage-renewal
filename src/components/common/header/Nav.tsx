import { MENU } from '../../../constants/menu.ts';
import { Link, useLocation, useParams } from 'react-router-dom';
import { PartParam } from '../../../types/common.ts';

const Nav = () => {
  const { pathname, hash } = useLocation();
  const { part } = useParams<PartParam>();

  const isChildrenActive = (path: string) => {
    return pathname.replace('/' + part ?? '', '') === path;
  };
  return (
    <ul className='bg-primary-700'>
      {MENU.map(({ path, label, children }) => (
        <li
          key={path}
          className={`${isChildrenActive(path) || pathname === path ? 'text-secondary-300' : 'text-white'} font-semibold`}
        >
          <Link to={path}>{label}</Link>
          {children && (
            <ul>
              {children.map(({ path, label }) => (
                <li
                  key={path}
                  className={`${pathname + hash === path ? 'text-secondary-300' : 'text-white'} font-semibold`}
                >
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Nav;
