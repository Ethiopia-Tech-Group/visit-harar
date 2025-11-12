// types/index.ts
export interface Landmark {
    id: number;
    name: string;
    position: {
      top: string;
      left: string;
    };
    description: string;
    images: string[];
    audio: string;
  }
  
  export interface AudioStory {
    id: number;
    title: string;
    duration: string;
    language: string;
    audio: string;
    image: string;
  }
  
  export interface Leader {
    id: number;
    name: string;
    title: string;
    image: string;
    bio: string;
    contributions: string[];
  }
  
  export interface Festival {
    id: number;
    name: string;
    date: string;
    description: string;
    image: string;
  }
  
  export interface VisitInterest {
    id: string;
    name: string;
    icon: string;
  }
  
  export interface ItineraryItem {
    id: string;
    name: string;
    duration: string;
    description: string;
    type: string;
  }