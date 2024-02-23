import { APIGatewayProxyHandlerV2} from "aws-lambda";

function getminutesToFriday(dateInMilisecondsFromEpoch: string): number {
    // Get the current date
    const now = new Date(Number(dateInMilisecondsFromEpoch));
  
    // Calculate the number of days until the next Friday
    let daysUntilFriday = 5 - now.getDay();
    if (daysUntilFriday < 0) {
      daysUntilFriday += 7;
    }

    // Calculate a number of minutes to today's midnight
    const midnight = new Date();
    midnight.setHours(0, 0, 0, 0);
    const minutesUntilMidnight = (midnight.getTime() - now.getTime()) / (1000 * 60);

    // Calculate the number of minutes from today's midnight to the next Friday
    const millisecondsUntilFriday = daysUntilFriday * 24 * 60 * 60 * 1000;
    const nextFriday = new Date();
    nextFriday.setTime(now.getTime() + millisecondsUntilFriday);
    const minutesUntilFriday = (nextFriday.getTime() - now.getTime()) / (1000 * 60);
  
    // Return the number of minutes as an integer
    return Math.floor(minutesUntilFriday+minutesUntilMidnight);
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
      body: getminutesToFriday(event.pathParameters?.date).toString()
      // statusCode: 500,
      // body: undefined
    };
}