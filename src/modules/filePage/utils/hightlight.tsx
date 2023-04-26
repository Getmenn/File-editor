import React from "react"

const hightlight = (filter: string, str: string ) => {
    
    if (!filter) return str
    const regexp = new RegExp(filter, 'ig')
    const matchValue = str.match(regexp)
  
    if (matchValue) {
      return str.split(regexp).map((s, index, array) => {
        if (index < array.length - 1) {
          const c = matchValue.shift()       
          return (
            <React.Fragment key={index}>
              {s}
              <span className={'hightlight'}>
                {c}
              </span>
          </React.Fragment>) 
        }
        return s
      })
    }
    return str
}

export {hightlight}