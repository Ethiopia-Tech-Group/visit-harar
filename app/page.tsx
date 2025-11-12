// app/page.tsx
import AudioStoriesDemo from './components/AudioStoriesDemo';
import Hero from './components/Hero';
import HistoryDemo from './components/History';
import InteractiveMap from './components/InteractiveMap';
// import AudioStorytelling from './components/AudioStorytelling/AudioStorytelling';
// import FestivalCalendar from './components/FestivalCalendar/FestivalCalendar';
// import Leadership from './components/Leadership/Leadership';
// import VisitPlanner from './components/VisitPlanner/VisitPlanner';
// import LearnMode from './components/LearnMode/LearnMode';
// import DailyDiscovery from './components/DailyDiscovery/DailyDiscovery';
// import TravelerJournal from './components/TravelerJournal/TravelerJournal';
// import Gallery from './components/Gallery/Gallery';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';

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