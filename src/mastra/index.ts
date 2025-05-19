
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { codeReviewAgent } from './agents';
import { CloudflareDeployer } from "@mastra/deployer-cloudflare";


export const mastra = new Mastra({
  deployer: new CloudflareDeployer({
    scope: "ffc85d8aa0642fe71cf8d1fa5b373279",
    projectName: "lewis-mastra-server",
    routes: [
      // {
      //   pattern: "",
      //   zone_name: "",
      //   custom_domain: true,
      // }
    ],
    // workerNamespace: "",
    auth: {
      apiToken: "QFaBUxwfvLqKiCfe8aS90EcrKjIiW09yGEERrqvQ",
      apiEmail: "lewis.cn.5656@gmail.com",
    }
  }),
  agents: { codeReviewAgent },
  logger: createLogger({
    name: 'Code Review',
    level: 'info',
  }),
});
