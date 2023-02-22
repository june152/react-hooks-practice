// import useInput from "./useInput";
// import useTabs from "./useTabs";

import { useRef } from "react";
// import useClick from "./useClick";

// import useTitle from "./useTitle";

import { useEffect } from "react";
import useAxios from "./useAxios";
import useBeforeLeave from "./useBeforeLeave";
import useConfirm from "./useConfirm";
import useFadeIn from "./useFadeIn";
import useFullScreen from "./useFullScreen";
import useNetwork from "./useNetwork";
import useNotification from "./useNotification";
import usePreventLeave from "./usePreventLeave";
import useScroll from "./useScroll";

function App() {
  //useInput
  // const maxLen = (val) => val.length <= 10;
  // const name = useInput("Mr. ", maxLen)


  //useTabs
  // const content = [
  //   {
  //     tab : "Section 1",
  //     content: "Content of Sec 1"
  //   },
  //   {
  //     tab : "Section 2",
  //     content: "Content of Sec 2"
  //   }
  // ]
  // const {current, change} = useTabs(0, content)
  

  //useTitle
  // const titleUpdater = useTitle("Loading...")
  // setTimeout(() => titleUpdater("Home"), 2000)


  //useClick
  //useRef : getElementBy 같은 느낌으로 컴포넌트 고르는 녀석
  // const sayHello = () => {
  //   console.log("say hello~")
  // }
  // const title = useClick(sayHello)

  //useBeforeLeave
  const leavingMouse = () => {
    console.log("R U Sure to leave?")
  }

  useBeforeLeave(leavingMouse)

  //useConfirm
  const deleteBtn = () => {
    console.log("Delete!!")
  }
  const abort = () => console.log("Aborted")
  const confirmDel = useConfirm("R U sure?", deleteBtn, abort)

  //usePreventLeave
  const {enablePrevent, disablePrevent} = usePreventLeave();


  //useFafeIn
  const fadeInH2 = useFadeIn(2, 2);
  const fadeInP = useFadeIn(5, 3);


  //useNetwork
  const handleNetworkChange = (online) => {
    console.log(online?"Online":"Offline")
  }
  const onLine = useNetwork(handleNetworkChange)


  //useScroll
  const {y} = useScroll()


  //useFullScreen
  const onFullS = (isFull) => {
    console.log(isFull?"Full":"Small")
  }
  const {el, triggerFull, exitFull} = useFullScreen(onFullS)


  //useNotification
  const tirggerNotif = useNotification("Notif Title", {body:"this is body"})


  //useAxios
  const {loading, error, data, refetch} = useAxios({url: "https://yts.mx/api/v2/list_movies.json"})
  console.log(`Loading : ${loading}\nError : ${error}\nData : ${JSON.stringify(data)}`)
  return (
    <div style={{height: "1000vh"}}>
      <h1>React Hooks Practice</h1>
      {/* <input  placeholder="Name" {...name} /> */}

      {/* {content.map((sec, idx) => <button key={idx} onClick={() => change(idx)}>{sec.tab}</button>)}
      <div>{current.content}</div> */}

      {/* <h1 ref={title}>Say Hello~~</h1> */}
      <button onClick={confirmDel}>Delete</button>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>

      <h2 {...fadeInH2}>Hello!</h2>
      <p {...fadeInP}>FadeIn Test</p>
      <h1>{onLine ? "Online" : "Offline"}</h1>
      <div ref={el}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
      <div><button onClick={tirggerNotif}>Notify</button></div>
      <button onClick={refetch}>Refetch</button>
      <h2 style={{position: "fixed", color: y > 100? "red" : "blue"}}>useScroll</h2>
    </div>
  );
}

export default App;
