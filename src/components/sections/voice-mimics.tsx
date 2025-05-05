'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, Mic } from 'lucide-react';
import { Progress } from '@/components/ui/progress'; // Use ShadCN progress for timeline
import { useState, useRef, useEffect } from 'react'; // Add state for playback control

interface VoiceSample {
  id: number;
  title: string;
  description: string;
  // In a real app, this would be an audio file URL
  audioSrc: string; // Placeholder
  durationSeconds: number; // Placeholder duration
}

const voiceSamples: VoiceSample[] = [
  {
    id: 1,
    title: 'News Report Read',
    description: 'Clear and authoritative delivery for a news segment.',
    audioSrc: '/audio/news_report.mp3', // Example path
    durationSeconds: 25,
  },
  {
    id: 2,
    title: 'Character Voice: Elderly Woman',
    description: 'Voice acting sample portraying a warm, slightly frail elderly character.',
    audioSrc: '/audio/elderly_woman.mp3',
    durationSeconds: 18,
  },
  {
    id: 3,
    title: 'Podcast Introduction',
    description: 'Engaging and friendly tone for a podcast opening.',
    audioSrc: '/audio/podcast_intro.mp3',
    durationSeconds: 15,
  },
   {
    id: 4,
    title: 'Commercial Voiceover: Tech Product',
    description: 'Enthusiastic and knowledgeable voice for a tech commercial.',
    audioSrc: '/audio/tech_commercial.mp3',
    durationSeconds: 30,
  },
];

export function VoiceMimics() {
  return (
    <section id="voice" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
           <Mic className="h-12 w-12 text-primary mb-2 slide-up" />
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up" style={{ animationDelay: '0.1s' }}>
            Voice Portfolio
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl slide-up" style={{ animationDelay: '0.2s' }}>
            Listen to a range of voice samples demonstrating versatility in tone, style, and character work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {voiceSamples.map((sample, index) => (
            <VoiceSampleCard key={sample.id} sample={sample} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface VoiceSampleCardProps {
  sample: VoiceSample;
  index: number;
}

function VoiceSampleCard({ sample, index }: VoiceSampleCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // In a real app, you'd use useRef for the audio element
  // const audioRef = useRef<HTMLAudioElement>(null);

  const delay = 0.3 + index * 0.1; // Staggered animation

  // --- Placeholder Playback Logic ---
  // Replace with actual audio element interaction
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Simulate progress for demo
    if (!isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
          const nextProgress = prev + (100 / sample.durationSeconds);
           setCurrentTime(prevTime => prevTime + 1);
          if (nextProgress >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
             setCurrentTime(0);
            return 0;
          }
          return nextProgress;
        });
      }, 1000);
       // Store interval to clear it if paused
       // In a real app, use audio element's 'timeupdate' event
       // @ts-ignore
       window[`interval_${sample.id}`] = interval;
    } else {
       // @ts-ignore
       clearInterval(window[`interval_${sample.id}`]);
       // In real app: audioRef.current?.pause();
       // Resetting progress on pause for simplicity in demo
       // setProgress(0);
       // setCurrentTime(0);
    }
  };

   // Reset progress if component unmounts while playing (placeholder)
   useEffect(() => {
    return () => {
        // @ts-ignore
        clearInterval(window[`interval_${sample.id}`]);
    };
  }, [sample.id]);


  // Format time helper
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };


  return (
    <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col slide-up" style={{ animationDelay: `${delay}s` }}>
      <CardHeader>
        <CardTitle className="text-xl text-foreground">{sample.title}</CardTitle>
        <CardDescription className="text-muted-foreground">{sample.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pt-4">
        {/* Simple Player UI */}
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={togglePlay} className="bg-primary/10 border-primary text-primary hover:bg-primary/20 transition-colors duration-200">
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
          </Button>
          <div className="flex-1 flex items-center gap-2">
             <Progress value={progress} className="w-full h-2 bg-secondary" />
             <span className="text-xs font-mono text-muted-foreground min-w-[70px] text-right">
               {formatTime(currentTime)} / {formatTime(sample.durationSeconds)}
             </span>
          </div>
          {/* Placeholder Volume Button */}
          {/* <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Volume2 className="h-5 w-5" />
            <span className="sr-only">Volume</span>
          </Button> */}
        </div>
      </CardContent>
       {/* Removed CardFooter as controls are now in CardContent */}
    </Card>
  );
}
