import { APIGatewayProxyHandlerV2} from "aws-lambda";

function getminutesToSaturday(dateInMilisecondsFromEpoch: string): number {
    // Get the current date
    const now = new Date(Number(dateInMilisecondsFromEpoch));
  
    // Calculate the number of days until the next Saturday
    let daysUntilSaturday = 6 - now.getDay();
    if (daysUntilSaturday < 0) {
      daysUntilSaturday += 7;
    }

    // Calculate a number of minutes to today's midnight
    const midnight = new Date();
    midnight.setHours(0, 0, 0, 0);
    const minutesUntilMidnight = (midnight.getTime() - now.getTime()) / (1000 * 60);

    // Calculate the number of minutes from today's midnight to the next Saturday
    const millisecondsUntilSaturday = daysUntilSaturday * 24 * 60 * 60 * 1000;
    const nextSaturday = new Date();
    nextSaturday.setTime(now.getTime() + millisecondsUntilSaturday);
    const minutesUntilSaturday = (nextSaturday.getTime() - now.getTime()) / (1000 * 60);
  
    // Return the number of minutes as an integer
    return Math.floor(minutesUntilSaturday+minutesUntilMidnight);
  }
  

  export const main: APIGatewayProxyHandlerV2 = async (event) => {
    if(!event.pathParameters?.date){
        return {
          statusCode: 500,
          body: 'Wrong date!'
        };
      }

    return {
      statusCode: 200,
      body: getminutesToSaturday(event.pathParameters?.date).toString()
      // statusCode: 500,
      // body: undefined
    };
}