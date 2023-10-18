import { useEffect, useState } from "react"

const Cricket = ({randomMax}) => {
        const [randomNumber, setRandomNumber] = useState(
                Math.floor(Math.random() * randomMax) + 1
        );

        const [cricket, setCricket] = useState('');

        useEffect(() => {
                console.log('Random team!!' + { cricket });
        }, []);

        useEffect(() => {
                window.localStorage.setItem('random', randomNumber);
                if( randomMax === randomNumber) {
                        window.localStorage.setItem("jackpot", true);
                }else {
                        window.localStorage.setItem("jackpot", false);
                }
                switch (randomNumber) {
                        case 1:
                                setCricket('India');
                                break;
                        case 2:
                                setCricket('Austrailia');
                                break;
                        case 3:
                                setCricket('New Zealand');
                                break;
                        case 4:
                                setCricket('Engalnd');
                                break;
                        case 5:
                                setCricket('Afghanistan');
                                break;
                        case 6:
                                setCricket('Pakistan');
                                break;
                        default:
                                setCricket('Odisha');

                }
                return function cleanUp() {
                        console.log('clean up');
                        window.localStorage.removeItem('random');
                }
        }, [randomNumber, randomMax]);

        return (
                <div cricket>
                        <h1 team>
                                Random Team
                        </h1>
                        {cricket}
                </div>
        )

};

export default Cricket;

