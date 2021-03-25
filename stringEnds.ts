export function solution(str: string, ending: string): boolean { 

   let strEnd:string = str.slice(ending.split("").length - 1) 

    if (strEnd == ending){ 
        return true
    }
    
    return false; // TODO: complete
  } 

  solution('abc', 'bdc') // returns true

