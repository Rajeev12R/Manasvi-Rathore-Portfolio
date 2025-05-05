'use server';

/**
 * @fileOverview Generates a summary of the portfolio's contents, tailored to different audiences.
 *
 * - summarizePortfolio - A function that handles the portfolio summary generation.
 * - SummarizePortfolioInput - The input type for the summarizePortfolio function.
 * - SummarizePortfolioOutput - The return type for the summarizePortfolio function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SummarizePortfolioInputSchema = z.object({
  portfolioDescription: z
    .string()
    .describe('A description of the portfolio, including the journalist\'s work and experience.'),
  audience: z
    .string()
    .describe(
      'The target audience for the summary (e.g., potential employers, collaborators).' + 
      'Instruct the model to highlight the journalist\'s key skills and experience tailored to this audience.'
    ),
});
export type SummarizePortfolioInput = z.infer<typeof SummarizePortfolioInputSchema>;

const SummarizePortfolioOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the portfolio, tailored to the specified audience.'),
});
export type SummarizePortfolioOutput = z.infer<typeof SummarizePortfolioOutputSchema>;

export async function summarizePortfolio(input: SummarizePortfolioInput): Promise<SummarizePortfolioOutput> {
  return summarizePortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizePortfolioPrompt',
  input: {
    schema: z.object({
      portfolioDescription: z
        .string()
        .describe('A description of the portfolio, including the journalist\'s work and experience.'),
      audience: z
        .string()
        .describe(
          'The target audience for the summary (e.g., potential employers, collaborators).' + 
          'Instruct the model to highlight the journalist\'s key skills and experience tailored to this audience.'
        ),
    }),
  },
  output: {
    schema: z.object({
      summary: z
        .string()
        .describe('A concise summary of the portfolio, tailored to the specified audience.'),
    }),
  },
  prompt: `You are a professional resume writer. You will be provided with a description of a journalist\'s portfolio and a target audience.
Your job is to generate a concise summary of the portfolio, tailored to the specified audience. Highlight the journalist\'s key skills and experience relevant to the audience.

Portfolio Description: {{{portfolioDescription}}}
Target Audience: {{{audience}}}
Summary: `,
});

const summarizePortfolioFlow = ai.defineFlow<
  typeof SummarizePortfolioInputSchema,
  typeof SummarizePortfolioOutputSchema
>(
  {
    name: 'summarizePortfolioFlow',
    inputSchema: SummarizePortfolioInputSchema,
    outputSchema: SummarizePortfolioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
