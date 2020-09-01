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
      id: 'championSelect',
      on: {
        FINISH: 'finished',
        TO_RUNE_SELECT: {
          target: 'runeSelect',
          cond: 'selectedChampion'
        },
        ADD_CHAMPION: {
          actions: ['addChampion']
        },
        TO_ITEM_SELECT: {
          target: 'itemSelect',
          cond: 'selectedChampion'
        },
        INIT: 'loading'
      }
    },
    itemSelect: {
      id: 'itemSelect',
      on: {
        TO_CHAMPION_SELECT: {
          target: 'championSelect',
        },
        TO_RUNE_SELECT: {
          target: 'runeSelect',
          cond: 'selectedChampion'
        },
        ADD_ITEM_TO_CHAMPION: {
          actions: ['addItemToChampion']
        },
        REMOVE_ITEM_FROM_CHAMPION: {
          actions: ['removeItemFromChampion']
        }
      }
    },
    runeSelect: {
      id: 'runeSelect',
      initial: 'init',
      states: {
        init: {
          on: {
            TO_CHAMPION_SELECT: {
              target: '#championSelect'
            },
            TO_ITEM_SELECT: {
              target: '#itemSelect',
              cond: 'selectedChampion'
            },
          }
        },
        precision: {
          on: {
            TO_CHAMPION_SELECT: {
              target: '#championSelect'
            },
            TO_ITEM_SELECT: {
              target: '#itemSelect',
              cond: 'selectedChampion'
            },
          }
        },
        domination: {
          on: {
            TO_CHAMPION_SELECT: {
              target: '#championSelect'
            },
            TO_ITEM_SELECT: {
              target: '#itemSelect',
              cond: 'selectedChampion'
            },
          }
        },
        sorcery: {
          on: {
            TO_CHAMPION_SELECT: {
              target: '#championSelect'
            },
            TO_ITEM_SELECT: {
              target: '#itemSelect',
              cond: 'selectedChampion'
            },
          }
        },
        resolve: {
          on: {
            TO_CHAMPION_SELECT: {
              target: '#championSelect'
            },
            TO_ITEM_SELECT: {
              target: '#itemSelect',
              cond: 'selectedChampion'
            },
          }
        },
        inspiration: {
          on: {
            TO_CHAMPION_SELECT: {
              target: '#championSelect'
            },
            TO_ITEM_SELECT: {
              target: '#itemSelect',
              cond: 'selectedChampion'
            },
          }
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
