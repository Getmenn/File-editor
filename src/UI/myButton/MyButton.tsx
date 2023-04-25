import './myButton.scss'

interface IMyButton{
    name: string;
    handleClick?: () => void;
}

const MyButton: React.FC<IMyButton> = ({ name, handleClick }) => {
    
    return (
        <button
            className='myButton'
            onClick={handleClick}
        >
            {name}
        </button>
    )
}

export {MyButton}