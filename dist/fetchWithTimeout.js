async function fetchWithTimeout(resource,fetchOptions,timeoutDuration){if("number"!=typeof timeoutDuration)throw new Error("`timeoutDuration` must be a `Number`.");const ac=new AbortController,options=fetchOptions?Object.assign({},fetchOptions):{};options.signal=ac.signal;const timeoutId=setTimeout((()=>ac.abort()),timeoutDuration||8e3),response=await fetch(resource,options);return clearTimeout(timeoutId),response}export{fetchWithTimeout as default};