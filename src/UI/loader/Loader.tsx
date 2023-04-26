import './loader.scss'

const Loader: React.FC = () => {
    return (
        <div className="loader">
            <svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 133 47" enableBackground="new 0 0 0 0" xmlSpace="preserve" text-align = 'center'>
                <circle fill="#000" stroke="none" cx="3" cy="22" r="3">
                    <animateTransform 
                        attributeName="transform" 
                        dur="1s" 
                        type="translate" 
                        values="0 15 ; 0 -15; 0 15" 
                        repeatCount="indefinite" 
                        begin="0.1"/>
                </circle>
                <circle fill="#000" stroke="none" cx="15" cy="22" r="3">
                    <animateTransform 
                        attributeName="transform" 
                        dur="1s" 
                        type="translate" 
                        values="0 10 ; 0 -10; 0 10" 
                        repeatCount="indefinite" 
                        begin="0.2"/>
                </circle>
                <circle fill="#000" stroke="none" cx="25" cy="22" r="3">
                    <animateTransform 
                        attributeName="transform" 
                        dur="1s" 
                        type="translate" 
                        values="0 5 ; 0 -5; 0 5" 
                        repeatCount="indefinite" 
                        begin="0.3"/>
                </circle>
            </svg>
        </div>
    )
}

export {Loader}