/*
 * - useState 定義とStateの更新 引数渡し
 * useEffect 副作用（DOM API Async）
 * useMemo
 * useCallback
 * useContext
 * useRef
*/
import React, { useState, useEffect } from 'react'

function HookBasic() {
  /*
   * count => state
   * setCount => 関数
   * useState() 初期値
   */
  const [count, setCount] = useState(12)

  /*
   * 副作用を発生させる、描画後に実行される
   * countが更新されるたびに再描画出来る
   */
  useEffect(() => {
    document.getElementById('effectHook').innerText = `You Clicked ${count} times`
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <p id="effectHook"></p>
      {/* setCoyuntに引数を渡して実行 */}
      <button onClick={() => setCount(preCount => preCount + 1)}> Click!</button>
    </div>
  )
}

export default HookBasic