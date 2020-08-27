import { ChampionStatContext, ChampionStatsSchema } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.schema';
import { MachineConfig } from 'xstate';
import { ChampionStatsEvent } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.events';

export const context: ChampionStatContext = {
  champions: [],
  items: [],
  errors: []
}

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
      on: {}
    },
    idle: {
      on: {}
    },
    finished: {
      on: {}
    },
    error: {
      on: {}
    },
  }
}