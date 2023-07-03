import styled from 'styled-components';
import { navBarInfoList } from '../../resource/string/navBarString';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setCurrent } from '../../modules/homeSlice';
import { KeyboardArrowUp } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { routerPath } from '../../resource/string/routerPath';
import { setPart } from '../../modules/ourTeamSlice';

export default function NavItems({ visibility }) {
    const isTouch = 'ontouchstart' in window;
    const [toggle, setToggle] = useState('');
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleTouch = (e, title, url) => {
        toggle === title ? navigate(url) : setToggle(title);
    };
    useEffect(() => {
        visibility || setToggle('');
    }, [visibility]);
    useEffect(() => {
        setToggle('');
    }, [location]);
    const handleChildClick = (e, parent, title) => {
        if (parent === routerPath.home.title) {
            dispatch(setCurrent(title));
        } else if (parent === routerPath.ourTeam.title) {
            dispatch(setPart(title.toLowerCase()));
        }
    };

    return (
        <ItemGroup>
            {navBarInfoList.map((item) => (
                <ItemWrapper key={item.id}>
                    {isTouch && item.child ? (
                        <span
                            className={
                                location.pathname.includes(item.url)
                                    ? 'title active'
                                    : 'title'
                            }
                            onTouchEnd={(e) =>
                                handleTouch(e, item.title, item.url)
                            }
                        >
                            {item.title}
                        </span>
                    ) : (
                        <Link
                            className={
                                location.pathname.includes(item.url)
                                    ? 'title active'
                                    : 'title'
                            }
                            to={item.url}
                        >
                            {item.title}
                        </Link>
                    )}
                    <div
                        className={
                            toggle === item.title ? 'child toggle' : 'child'
                        }
                    >
                        {item.child &&
                            item.child.map((sub) => (
                                <ChildLink
                                    key={sub.id}
                                    to={sub.url || 'home'}
                                    state={{ title: sub.title }}
                                    onClick={(e) =>
                                        handleChildClick(
                                            e,
                                            item.title,
                                            sub.title
                                        )
                                    }
                                    point={
                                        location.pathname === sub.url ? 1 : 0
                                    }
                                >
                                    {sub.title}
                                </ChildLink>
                            ))}
                        {item.child && isTouch && (
                            <KeyboardArrowUp onClick={(e) => setToggle('')} />
                        )}
                    </div>
                </ItemWrapper>
            ))}
        </ItemGroup>
    );
}

const ItemGroup = styled.div`
    display: flex;
    max-width: 500px;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;

    @media (max-width: 576px) {
        width: 80%;
    }
`;

const ItemWrapper = styled.div`
    position: relative;

    .title {
        color: ${(props) => props.theme.color.white};
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
        color: ${(props) => props.theme.color.secondary};
    }

    .child {
        width: 8rem;
        position: absolute;
        top: 2rem;
        left: calc(50% - 4rem);
        display: flex;
        justify-content: center;
        flex-direction: column;
        background: ${(props) => props.theme.color.primary};
        border-bottom-right-radius: 1.5rem;
        border-bottom-left-radius: 1.5rem;
        box-shadow: 0 4px 4px rgba(54, 113, 217, 0.25);
        transition: opacity 0.5s, visibility 0.5s;
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
                margin: 0.5rem 0;
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
            padding-top: 0.5rem;
        }
    }

    .child.toggle {
        visibility: visible;
        opacity: 1;
    }

    @media (hover: hover) and (pointer: fine) {
        // 마우스 입력인 경우
        :hover .child {
            visibility: visible;
            opacity: 1;
        }
    }
`;

const ChildLink = styled(Link)`
    color: ${(props) =>
        props.point === 1 ? props.theme.color.yellow : props.theme.color.white};

    &:hover {
        color: ${(props) => props.theme.color.yellow};
    }
`;
