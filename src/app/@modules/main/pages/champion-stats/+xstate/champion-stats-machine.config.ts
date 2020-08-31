import { ChampionStatContext, ChampionStatsSchema } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.schema';
import { MachineConfig } from 'xstate';
import { ChampionStatsEvent } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.events';

export const context: ChampionStatContext = {
  champions: [],
  selectedChampion: null,
  items: [],
  errors: [],
  runes: []
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
          target: 'championSelect',
          actions: ['init']
        },
        FAIL: 'error'
      }
    },
    championSelect: {
      on: {
        FINISH: 'finished',
        ADD_CHAMPION: {
          target: 'itemSelect',
          actions: ['addChampion']
        },
        INIT: 'loading'
      }
    },
    itemSelect: {
      on: {
        RESELECT_CHAMPION: {
          target: 'championSelect',
          actions: ['reselectChampion']
        },
        ADD_ITEM_TO_CHAMPION: {
          target: 'itemSelect',
          actions: ['logMessage','addItemToChampion']
        },
        REMOVE_ITEM_FROM_CHAMPION: 'championSelect',
      }
    },
    runeSelect: {
      on: {
        RESELECT_CHAMPION: {
          target: 'championSelect',
          actions: ['reselectChampion']
        },
        SELECT_ITEM: {
          
        }
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
