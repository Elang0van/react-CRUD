import { useEffect, useState } from 'react'

const Component = () => {
    const [first, setfirst] = useState(1)
    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            console.log(i)
            setfirst((prev)=>prev+1)
        }
    }, [])
    return (
        <div>{
            first}</div>
    )
}

export default Component