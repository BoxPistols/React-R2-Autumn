/*
 * useState
 * useEffect
 * useMemo
 * useCallback
 * useContext
 * useRef
*/
import React, {useState} from 'react'

function HookBasic() {
  /*
   * count => state
   * setCount => 関数
   * useState() 初期値
   */
  const [count, setCount] = useState(12)

  return (
    <div>
      <p>Count: {count}</p>
      {/* setCoyuntに引数を渡して実行 */}
      <button onClick={() => setCount(preCount => preCount + 1)}> Click!</button>
    </div>
  )
}

export default HookBasic