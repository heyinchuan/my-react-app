import { useState } from 'react'

function App() {
  // 定义状态变量
  const [seasons, setSeasons] = useState(["Autum", "Spring", "Summer", "Winter"]);
  const [inputValue, setInputValue] = useState("");

  // 添加新季节的函数
  const addSeason = () => {
    if (inputValue.trim() === "") return; // 防止添加空值
    setSeasons([...seasons, inputValue]); // 将新季节添加到数组
    setInputValue(""); // 清空输入框
  };

  // 删除季节的函数
  const removeSeason = (index) => {
    const updatedSeasons = seasons.filter((_, i) => i !== index); // seasons.filter 方法用于生成一个新的数组，排除掉索引等于 index 的元素。
    setSeasons(updatedSeasons);
  };

  // 如果你需要在 JSX 中嵌入 JavaScript 代码（例如变量、函数调用、条件表达式等），需要用 {} 包裹起来。
  return (
    <>
    <div style={{padding: "20px", fontFamily: "Arial"}}>
      <h1>Seasons</h1>
      <ul>
        {seasons.map((season, index) => (
          <li key={index} style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
            <span style={{marginRight: "10px"}}>{season}</span>
            <button onClick={() => removeSeason(index)} style={{marginLeft: "auto"}}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div style={{marginTop: "20px"}}>
        <input 
          type='text'
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Enter a new season'
          style={{marginRight: "10px"}}
          />
        <button onClick={addSeason}>Add</button>
      </div>
    </div>
    </>
  );
}

export default App
