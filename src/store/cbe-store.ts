import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {
  generateCompetencyBuildingEvents,
  GenerateCompetencyBuildingEventsInput,
  GenerateCompetencyBuildingEventsOutput,
} from '@/ai/flows/generate-competency-building-events';

type CbeState = {
  events: GenerateCompetencyBuildingEventsOutput['events'] | null;
  isPending: boolean;
  error: string | null;
  generateEvents: (input: GenerateCompetencyBuildingEventsInput) => Promise<void>;
};

export const useCbeStore = create(
  persist<CbeState>(
    (set) => ({
      events: null,
      isPending: false,
      error: null,
      generateEvents: async (input) => {
        set({ isPending: true, events: null, error: null });
        try {
          const result = await generateCompetencyBuildingEvents(input);
          set({ events: result.events, isPending: false });
        } catch (error) {
          console.error('Failed to generate competency building events:', error);
          set({ isPending: false, error: 'Failed to generate new events. Please try again.' });
        }
      },
    }),
    {
      name: 'cbe-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
