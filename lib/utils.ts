// Server side utility function that can be used again again 
export const validateIncomingData = (checkVal: unknown| null, maxlength: number) => {
    if( !checkVal || typeof checkVal !== 'string' || checkVal.length > maxlength) {
        return false
    }
    return true
}
// Error Handling of data send to server

export const getErrorMessage = (error: unknown ): string => {

    let message: string
    if (error instanceof Error) {
        // Checking for instance of object is thrown as error by the response
        message = error.message 
        }
    // If the function is a string as well then return error needs to be checked and converted accordingly    
    else if(error && typeof error === 'object' && 'message' in error){
            message =  String(error.message)
        
    }
    else{
        message = "Something went wrong"
    }
    return message
}


