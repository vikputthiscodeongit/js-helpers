async function fetchWithTimeout(resource,fetchOptions,timeoutDuration){if("number"!=typeof timeoutDuration)throw new Error("`timeoutDuration` must be a `Number`.");const options=fetchOptions||{},ac=new AbortController;options.signal=ac.signal;const timeoutId=setTimeout((()=>ac.abort()),timeoutDuration||8e3),response=await fetch(resource,options);return clearTimeout(timeoutId),response}export{fetchWithTimeout as default};