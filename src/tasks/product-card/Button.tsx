import './Button.scss';

export interface IButton {
    title: string;
    img: string;
    onClick?: () => void;
}

const Button = ({ title, img, onClick }: IButton) => (
    <div className="button" onClick={onClick}>
        <div className="button-image">
            <img src={img} />
        </div>
        <div className="button-title">{title}</div>
    </div>
);

export default Button;
