import { useEffect, useState } from "react";
import { useMemo } from "react";

const UseMemoApp = ()=>{
    const [count, setCount] = useState(0);
    const [normalcount, setNormalcount] = useState(0);
    let calcu = (num)=>{
        for (let i = 0; i < 20000; i++) {
            console.log("Calculating...");
            num += 1;
        }
        return num;
    }
    let calcuExpensive = useMemo(()=>{calcu(count)},[count]);

    const countincrease = ()=>{
        setNormalcount(1+normalcount);
    }
    return (
        <>
            count is{calcuExpensive}
            normal count is {normalcount}
            <button onClick={countincrease}>normal calculation</button>
        </>
    )
}
export default UseMemoApp;