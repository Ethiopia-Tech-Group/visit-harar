// app/page.tsx
'use client'
import AudioStoriesDemo from './components/AudioStoriesDemo';
import Hero from './components/Hero';
import HistoryDemo from './components/History';


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="relative">
        <Hero />
        {/* <InteractiveMap /> */}
        <HistoryDemo />
        <AudioStoriesDemo />
        {/* 
        <AudioStorytelling />
        <FestivalCalendar />
        <Leadership />
        <VisitPlanner />
        <LearnMode />
        <DailyDiscovery />
        <TravelerJournal />
        <Gallery />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}