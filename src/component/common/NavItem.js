import styled, {css} from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {setCurrent} from "../../modules/homeSlice";
import {useDispatch} from "react-redux";
import {KeyboardArrowUp} from "@mui/icons-material";
import {useEffect, useState} from "react";

export const NavItem = (props) => {
    const isTouch = 'ontouchstart' in window;
    const [toggle, setToggle] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();
    const item = props.item;
    const handleTouch = (e) => {
        toggle ?
            window.location.href = item.url
            : setToggle(true);
        console.log(toggle);
    }
    useEffect(() => {
        props.visibillity || setToggle(false);
    }, [props.visibillity]);
    
    return (
        <ItemWrapper>
            {
                isTouch && item.child ?
                    <span
                        className={location.pathname.includes(item.url) ? 'title active' : 'title'}
                        onTouchEnd={handleTouch}
                    >{item.title}</span>
                    :
                    <Link
                        className={location.pathname.includes(item.url) ? 'title active' : 'title'}
                        to={item.url}
                        onClick={e=>dispatch(setCurrent('Home'))}
                    >{item.title}</Link>
            }
            <div className={toggle ? 'child toggle' : 'child'}>
                {item.child && item.child.map(sub =>
                    <ChildLink
                        key={sub.id}
                        to={sub.url || 'home'}
                        state={{title: sub.title}}
                        onClick={e=>dispatch(setCurrent(sub.title))}
                        point={location.pathname === sub.url ? 1 : 0}
                    >{sub.title}</ChildLink>
                )}
                {item.child && isTouch && (
                    <KeyboardArrowUp onClick={e => setToggle(false)}/>
                )}
            </div>
        </ItemWrapper>
    );
}

const ItemWrapper = styled.div`
  position: relative;
    
  .title {
    color: ${props => props.theme.color.white};
    font-size: 1.25rem;
    font-weight: 600;
    padding: 1rem 0;
    @media (max-width: 992px) {
      font-size: 1rem;
    }
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
    @media (max-width: 576px) {
      font-size: 1rem;
      margin-top: 1rem;
    }
  }
    
  .title.active {
    color: ${props => props.theme.color.secondary};
  }
    
  .child {
    width: 8rem;
    position: absolute;
    top: 2rem;
    left: calc(50% - 4rem);
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${props => props.theme.color.primary};
    border-bottom-right-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    box-shadow: 0 4px 4px rgba(54, 113, 217, .25);
    transition: opacity .5s, visibility .5s;
    visibility: hidden;
    opacity: 0;
    a {
      font-size: 1.125rem;
      text-align: center;
      margin: 0.75rem 0;
    }
    svg {
      width: 100%;
      color: white;
      text-align: center;
    }
    
    @media (max-width: 992px) {
      width: 6rem;
      left: calc(50% - 3rem);
      border-bottom-right-radius: 1rem;
      border-bottom-left-radius: 1rem;
      a {
        font-size: 1rem;
        margin: .5rem 0;
      }
    }
    @media (max-width: 768px) and (min-width: 577px) {
      width: 8rem;
      left: calc(50% - 4rem);
      border-bottom-right-radius: 1.5rem;
      border-bottom-left-radius: 1.5rem;
      a {
        font-size: 1.125rem;
        margin: 0.75rem 0;
      }
    }
    @media (max-width: 576px) {
      top: 1rem;
      padding-top: .5rem;
    }
  }
  .child.toggle {
    visibility: visible;
    opacity: 1;
  }
  @media (hover: hover) and (pointer: fine) { // 마우스 입력인 경우
    :hover .child {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const ChildLink = styled(Link)`
  color: ${props => props.point === 1 ? props.theme.color.yellow : props.theme.color.white};

  &:hover {
    color: ${props => props.theme.color.yellow};
  }
`;