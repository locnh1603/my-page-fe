import { ChampionStatContext, ChampionStatsSchema } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.schema';
import { MachineConfig } from 'xstate';
import { ChampionStatsEvent } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.events';

export const context: ChampionStatContext = {
  champions: [],
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
      on: {
        INIT: 'loading'
      }
    },
    loading: {
      on: {
        SUCCESS: 'idle',
        FAIL : 'error'
      }
    },
    idle: {
      on: {
        FINISH: 'finished',
        ADD_CHAMPION: 'idle',
        REMOVE_CHAMPION: 'idle',
        ADD_MODIFIER_TO_CHAMPION: 'idle',
        REMOVE_MODIFIER_FROM_CHAMPION: 'idle',
        ADD_ITEM_TO_CHAMPION: 'idle',
        REMOVE_ITEM_FROM_CHAMPION: 'idle',
        CHANGE_CHAMPION_LEVEL: 'idle',
        INIT: 'loading'
      }
    },
    finished: {
      type: 'final'
    },
    error: {
      type: 'final',
      on : {
        '': 'loading'
      }
    },
  }
};
