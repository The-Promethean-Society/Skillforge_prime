import { create } from 'zustand';
import {
  generateCompetencyBuildingEvents,
  GenerateCompetencyBuildingEventsInput,
  GenerateCompetencyBuildingEventsOutput,
} from '@/ai/flows/generate-competency-building-events';

type CbeState = {
  events: GenerateCompetencyBuildingEventsOutput['events'] | null;
  isPending: boolean;
  generateEvents: (input: GenerateCompetencyBuildingEventsInput) => Promise<void>;
};

export const useCbeStore = create<CbeState>((set) => ({
  events: null,
  isPending: false,
  generateEvents: async (input) => {
    set({ isPending: true, events: null });
    try {
      const result = await generateCompetencyBuildingEvents(input);
      set({ events: result.events, isPending: false });
    } catch (error) {
      console.error('Failed to generate competency building events:', error);
      set({ isPending: false });
    }
  },
}));
