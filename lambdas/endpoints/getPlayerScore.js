const Responses=require('../common/API_Responses');
const tableName= process.env.tableName;
const Dynamo= require('../common/Dynamo');

exports.handler = async (event) => {
    console.log(event);

    if (!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400();
    }
    let ID = event.pathParameters.ID;

    const user= await Dynamo.get(ID,tableName).catch(err=>{
        console.log("Error in Dynamo get",err);
        return null;
    });
    if(!user){
        return Responses._400({message: "failed to get user ID"})
    }
    return Responses._200({user})


}