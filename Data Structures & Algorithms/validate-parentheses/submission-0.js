class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = []

        for(let i=0; i<s.length; i++){
            if(i==0)
            {
                arr.push(s[i])
                continue;
            }
            let len = arr.length

            if((s[i] == ')' && arr[len-1] == '(') 
            || (s[i] == ']' && arr[len-1] == '[')  
            || (s[i] == '}' && arr[len-1] == '{')){
                arr.pop()
            }else{
                arr.push(s[i])
            }
            
        }


        if(arr.length){
            return false
        }
        else
        {
            return true
        }

    }
}
