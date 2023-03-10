import React, {useEffect, useState} from "react";
import Stopwatch from "renderer/Stopwatch";
import {TimeoutWarningModal} from './TimeoutWarningModal'
import { addEventListeners,  removeEventListeners } from './utils'
    
export const TimeoutLogic = () => { 
  const [isWarningModalOpen, setWarningModalOpen] = useState(false);
  useEffect(() => {
    const createTimeout1 = () => setTimeout(()=>{ 
      setWarningModalOpen(true);
    },20000) // 20 seconds

    // const createTimeout2 = () => setTimeout(() => {
    //   // Implement a sign out function here
    //   window.location.href = 'https://vincentntang.com'
    // },10000)

    const listener = () => {
      if(!isWarningModalOpen){
        clearTimeout(timeout)
        timeout = createTimeout1();
      }
    } 

    // Initialization
    let timeout = isWarningModalOpen  ? " " : createTimeout1()
    addEventListeners(listener);

    // Cleanup
    return () => {
      removeEventListeners(listener);
      clearTimeout(timeout);
    }
  },[isWarningModalOpen])
  return (
    <div>
      {isWarningModalOpen && (
        <TimeoutWarningModal 
          isOpen={isWarningModalOpen}
          onRequestClose={() => setWarningModalOpen(false)}
        />
        )
      }
    </div>
  ) 
}