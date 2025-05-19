
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { codeReviewAgent } from './agents';

export const mastra = new Mastra({
  agents: { codeReviewAgent },
  logger: createLogger({
    name: 'Code Review',
    level: 'info',
  }),
});
