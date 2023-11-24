import { APIGatewayProxyHandlerV2} from "aws-lambda";

export const main: APIGatewayProxyHandlerV2 = async (event) => {
  if(!event.pathParameters?.date){
    return {
      statusCode: 500,
      body: 'Wrong date!'
    };
  }
  return {
    statusCode: 200,
    body: (new Date(Number(event.pathParameters?.date)).getDay() === 6).toString()
    // statusCode: 500,
    // body: undefined
  };
}
