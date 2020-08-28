import { ChampionStatContext, ChampionStatsSchema } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.schema';
import { MachineConfig } from 'xstate';
import { ChampionStatsEvent } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.events';

export const context: ChampionStatContext = {
  champions: [],
  selectedChampion: null,
  items: [],
  errors: []
};

export const ChampionStatMachineConfig: MachineConfig<
  ChampionStatContext,
  ChampionStatsSchema,
  ChampionStatsEvent
> = {
  id: 'champion-stats',
  context,
  initial: 'boot',
  states: {
    boot: {
      always: 'loading'
    },
    loading: {
      invoke: {
        id: 'fetch',
        src: 'fetch'
      },
      on: {
        SUCCESS: {
          target: 'idle',
          actions: ['logMessage', 'init']
        },
        FAIL: 'error'
      }
    },
    idle: {
      on: {
        FINISH: 'finished',
        ADD_CHAMPION: {
          target: 'championDetail',
          actions: ['logMessage', 'addChampion']
        },
        REMOVE_CHAMPION: 'idle',
        INIT: 'loading'
      }
    },
    championDetail: {
      on: {
        ADD_MODIFIER_TO_CHAMPION: 'idle',
        REMOVE_MODIFIER_FROM_CHAMPION: 'idle',
        ADD_ITEM_TO_CHAMPION: {
          target: 'championDetail',
          actions: ['logMessage','addItemToChampion']
        },
        REMOVE_ITEM_FROM_CHAMPION: 'idle',
        CHANGE_CHAMPION_LEVEL: 'idle',
      }
    },
    finished: {
      type: 'final'
    },
    error: {
      type: 'final',
      always: 'loading'
    },
  }
};
