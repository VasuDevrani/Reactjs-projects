// below is the function for all CUD {read already done in app.js} operations

// Here optionsObj is responsible for actual operations 

// the function is just supposed to update the data, catch errors and change the state and not necessarily required to return a response

const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try{
        const response = await fetch(url, optionsObj);
        if(!response.ok) throw Error('Please reload the app');

    }catch (err){
        errMsg = err.message;
    }finally{
        return errMsg;
    }
}
export default apiRequest;