import NavTab from "./NavTab";
import { Close, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

type Props = {
    color: string,
    title: string
}

export const Header = ({color, title}: Props) => {
    const navigate = useNavigate();

    const backOrCloseHandler = () => {
        navigate('/');
    }
    return (
        <nav className="main-header" style={{backgroundColor: color}}>
            <div className="left-content">
                <ArrowBack onClick={backOrCloseHandler}/>
                <span>{title}</span>
            </div>
            <div className="right-content">
                <Close onClick={backOrCloseHandler}/>
            </div>
        </nav>
    );
}