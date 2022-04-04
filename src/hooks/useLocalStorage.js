import React, { useState } from 'react'

const useLocalStorage = (key, initilValue) => {
    const [value, setValue] = useState(() => {
        if (typeof window === undefined){
           return initilValue;
       }
   try {
       const data = window.localStorage.getItem(key);
       return data ? JSON.parse(data) : initilValue;
   } catch (error) {
       console.log(error);
       return initilValue;
   }
})                                                                                                                                                                     

const setLocalStorage =(value) => {
    try {
        setValue(value)

        if (typeof window !== undefined) {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    } catch (error) {

    }
}

  return [value, useLocalStorage];
};

export default useLocalStorages 