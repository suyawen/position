import React, { useRef, useEffect,useState } from "react";
import "./position.css";
export default function Positon() {
  const data = [
    {
      position: "同城零售_ToB产品运营(猫超卡) -用户运营部",
      location: "杭州",
      time: "9分钟前",
    },
    {
      position: "阿里云智能事业群- -系统研发专家-机器学习平台",
      location: "北京",
      time: "10分钟前",
    },
    {
      position: "中台运营事业部-品牌搜索产品运营-上海",
      location: "上海",
      time: "11分钟前",
    },
    {
      position: "阿里妈妈技术-前端开发专家/高级专家",
      location: "北京",
      time: "12分钟前",
    },
    {
      position: "北京同城零售-渠道拓展专家-天猫超市1",
      location: "杭州",
      time: "13分钟前",
    },

    {
      position: "同城零售_ToB产品运营(猫超卡) -用户运营部1",
      location: "杭州",
      time: "9分钟前",
    },
    {
      position: "阿里云智能事业群- -系统研发专家-机器学习平台1",
      location: "北京",
      time: "10分钟前",
    },
    {
      position: "中台运营事业部-品牌搜索产品运营-上海1",
      location: "上海",
      time: "11分钟前",
    },
    {
      position: "阿里妈妈技术-前端开发专家/高级专家2",
      location: "北京",
      time: "12分钟前",
    },
    {
      position: "北京同城零售-渠道拓展专家-天猫超市2",
      location: "杭州",
      time: "13分钟前",
    },

    {
      position: "同城零售_ToB产品运营(猫超卡) -用户运营部2",
      location: "杭州",
      time: "9分钟前",
    },
    {
      position: "阿里云智能事业群- -系统研发专家-机器学习平台2",
      location: "北京",
      time: "10分钟前",
    },
    {
      position: "中台运营事业部-品牌搜索产品运营-上海3",
      location: "上海",
      time: "11分钟前",
    },
    {
      position: "阿里妈妈技术-前端开发专家/高级专家3",
      location: "北京",
      time: "12分钟前",
    },
    {
      position: "北京同城零售-渠道拓展专家-天猫超市3",
      location: "杭州",
      time: "13分钟前",
    },
    {
      position: "阿里云智能事业群- -系统研发专家-机器学习平台3",
      location: "北京",
      time: "10分钟前",
    },
  ];
  let timer=null;
  const [count,setCount]=useState(5)
  const TableDom = useRef();
  function updataDom(data) {
    TableDom.current.firstElementChild.remove();
    let TrDom = document.createElement("tr");
    TrDom.innerHTML = `
        <td>${data.position}</td>
        <td>${data.location}</td>
        <td>${data.time}</td>
    `;
    TableDom.current.appendChild(TrDom);
  }
  function setLoop() {
      //剩余数据的渲染
    let i = count;
    timer = setInterval(() => {    
      if (i == data.length) {
        console.log(i);
        i = 0;
      }
      updataDom(data[i]);
      i++;
    }, 2000);
  }
  useEffect(() => {
    setLoop()
  }, []);
  function stopLoop() {
    clearInterval(timer);
  }
  function startLoop() {
    setLoop()
  }
  return (
    <div className="tablebox">
      <div className="tbl-body">
        <h3>
          最新职位<span>更多</span>
        </h3>
        <table onMouseOver={stopLoop} onMouseLeave={startLoop}>
          <tbody ref={TableDom}>
            {data.slice(0, `${count}`).map((items, index) => (
              <tr key={index}>
                <td>{items.position}</td>
                <td>{items.location}</td>
                <td>{items.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
