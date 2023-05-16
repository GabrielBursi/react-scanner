import { useState } from "react";
import { Result, Scanner } from "../components"

export const Home = () => {

    const [isbn, setIsbn] = useState('');

    return (
        <>
            <Scanner onScan={setIsbn}/>
            <Result isbn={isbn}/>
        </>
    )
}
