const Responses=require('./API_Responses');

exports.handler = async (event) => {

  if (!event.pathParameters || !event.pathParameters.ID){
    return Responses._400();
  }
  let ID=event.pathParameters.ID;

  if (data[ID]){

    return Responses._200(data[ID]);
  }

  return Responses._400({message:"no id in data"})


};

const data = {
  1234: { name: "abdelhadi", age: "25", job: "web dev" },
  5678: { name: "alaedin", age: "23", job: "employee" },
};
