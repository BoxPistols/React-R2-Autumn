import React, { useState, useMemo } from 'react'

export default function MemoBasic() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const double = count => {
        let i = 0
        while (i < 10000000)  i ++
        return count * 2
    }
    // bad
    // const doubleCount = double(count1)
    const doubleCount = useMemo(() => double(count1), [count1])

    return (
        <div>
            <p>DoubleCount: {doubleCount}</p>

            <p>count1 : {count1}</p>
            <button onClick={()=> setCount1(count1 + 1)}>Incriment1</button>

            <p>count2 : {count2}</p>
            <button onClick={()=> setCount2(count2 + 1)}>Incriment2</button>
        </div>
    )
}
