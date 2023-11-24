import {
  Api,
  StaticSite,
  StackContext,
} from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {

  // Create the HTTP API
  const api = new Api(stack, "Api", {
    routes: {
      "GET /isSaturday/{date}": "functions/isSaturday.main",
      "GET /minutesToSaturday/{date}": "functions/minutesToSaturday.main",
    },
  });

  // Deploy our React app
  const site = new StaticSite(stack, "ReactSite", {
    path: "frontend",
    buildCommand: "npm run build",
    buildOutput: "build",
    environment: {
      REACT_APP_API_URL: api.url,
    },
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
    ApiEndpoint: api.url,
  });
}
