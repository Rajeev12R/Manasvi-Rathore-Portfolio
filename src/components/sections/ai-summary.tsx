'use client';

import { useState } from 'react';
import { summarizePortfolio } from '@/ai/flows/portfolio-summary';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown

// Placeholder portfolio description - replace with actual data fetching or static content
const portfolioDescription = `
Verity is an aspiring journalist with a strong foundation in investigative reporting and feature writing.
Key Skills: Research, Interviewing, Writing (AP Style), Editing, Fact-Checking, Multimedia Storytelling (Basic Video/Audio).
Experience: Internship at Local News Outlet (Summer 2023), University Newspaper Staff Writer (2 years), Freelance contributions to online publications.
Notable Work: Uncovered city hall spending discrepancies, profiled community leaders, explored the impact of tech on local businesses.
Philosophy: Dedicated to ethical reporting, uncovering truth, and giving voice to the underrepresented. Seeks opportunities to grow skills in data journalism and long-form narrative projects.
`;

export function AISummary() {
  const [audience, setAudience] = useState<string>('potential employers');
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setSummary(''); // Clear previous summary
    try {
      const result = await summarizePortfolio({
        portfolioDescription,
        audience,
      });
      setSummary(result.summary);
      toast({
          title: "Summary Generated",
          description: `AI summary tailored for ${audience} is ready.`,
          variant: "default", // Use 'default' which maps to your secondary/lavender
      });
    } catch (error) {
      console.error('Error generating summary:', error);
      toast({
        title: 'Error Generating Summary',
        description: 'Could not generate the portfolio summary. Please try again.',
        variant: 'destructive',
      });
       setSummary('Failed to generate summary. Please check the console for details.'); // Display error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="summary" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up">
            AI-Powered Summary
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl slide-up" style={{ animationDelay: '0.1s' }}>
            Need a quick overview? Select an audience, and our AI assistant will generate a tailored summary of Verity's portfolio.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Card className="shadow-md border-secondary slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">Generate Portfolio Snapshot</CardTitle>
                 <CardDescription className="text-center text-muted-foreground">
                    Choose who this summary is for:
                 </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="audience" className="text-left sr-only">Target Audience</Label>
                  <Select value={audience} onValueChange={setAudience}>
                    <SelectTrigger id="audience" className="w-full bg-secondary/50 border-secondary focus:ring-primary">
                      <SelectValue placeholder="Select audience..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="potential employers">Potential Employers</SelectItem>
                      <SelectItem value="collaborators">Potential Collaborators</SelectItem>
                      <SelectItem value="academic reviewers">Academic Reviewers</SelectItem>
                      <SelectItem value="general public">General Public</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleGenerateSummary} disabled={isLoading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow hover:shadow-md">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    'Generate Summary'
                  )}
                </Button>
              </div>

              {summary && (
                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="text-xl font-semibold mb-4 text-center text-foreground">Generated Summary for {audience}:</h3>
                   <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none bg-secondary/30 p-4 rounded-md border border-secondary text-foreground">
                     {/* Use ReactMarkdown to render the summary */}
                    <ReactMarkdown>{summary}</ReactMarkdown>
                  </div>
                </div>
              )}
               {!summary && !isLoading && (
                 <p className="mt-8 text-center text-muted-foreground italic">Select an audience and click generate to see the AI summary.</p>
               )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
