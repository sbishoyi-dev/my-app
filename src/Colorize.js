import { useState } from 'react';
const Colorizer = () => {
        const [color, setColor] = useState('red');
        const changeColor = () => {
                const randomColor = getRandomColor();
                console.log('Color change with', '#' + randomColor);
                setColor('#' + randomColor);
        }
        const getRandomColor = () => {
                const random = Math.floor(Math.random() * 16772215).toString(16);
                return random;

        }
        return (
                <div className="colorizer">
                        <div className="box" style={{ backgroundColor: color }}>
                                {color}
                        </div>
                        <button onClick={changeColor}>Change color</button>
                </div>
        )
};
export default Colorizer;