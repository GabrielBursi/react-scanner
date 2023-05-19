import { useState } from "react";
import { Result, Scanner } from "../components"

export const Home = () => {

    const [isbn, setIsbn] = useState('');
    const [isValid, setIsValid] = useState(false);

    return (
        <>
            <Scanner onScan={setIsbn} setIsValid={setIsValid}/>
            {isValid && <Result isbn={isbn}/>}
        </>
    )
}
