import { FC } from 'react';
import { Close, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { HeaderPropsType } from '../types';

export const Header: FC<HeaderPropsType> = ({ color, title }) => {
    const navigate = useNavigate();

    const backOrCloseHandler = () => {
        navigate('/');
    }
    return (
        <nav className="main-header" style={{ backgroundColor: color }}>
            <div className="left-content">
                <ArrowBack onClick={backOrCloseHandler} />
                <span>{title}</span>
            </div>
            <div className="right-content">
                <Close onClick={backOrCloseHandler} />
            </div>
        </nav>
    );
}