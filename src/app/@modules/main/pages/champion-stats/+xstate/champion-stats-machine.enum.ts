export enum ChampionStatsMachineEventsEnum {
  FetchChampionList = 'FETCH_CHAMPION_LIST',
  FetchItemList = 'FETCH_ITEM_LIST',
  Init = 'INIT',
  Success = 'SUCCESS',
  Fail = 'FAIL',
  AddChampion = 'ADD_CHAMPION',
  RemoveChampion = 'REMOVE_CHAMPION',
  AddItemToChampion = 'ADD_ITEM_TO_CHAMPION',
  RemoveItemFromChampion = 'REMOVE_ITEM_FROM_CHAMPION',
  FetchChampionStat = 'FETCH_CHAMPION_STAT',
  ChangeChampionLevel = 'CHANGE_CHAMPION_LEVEL',
  AddModifierToChampion = 'ADD_MODIFIER_TO_CHAMPION',
  RemoveModifierFromChampion = 'REMOVE_MODIFIER_FROM_CHAMPION',
  ToChampionSelect = 'TO_CHAMPION_SELECT',
  ToItemSelect = 'TO_ITEM_SELECT',
  ToRuneSelect = 'TO_RUNE_SELECT',
  Finish = 'FINISH'
}
