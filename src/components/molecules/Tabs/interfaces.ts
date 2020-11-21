export interface Tab {
  label: string,
  content: Element
}

export interface Props {
  tabs: Tab[],
  activeTab: number,
  changeActiveTab: (num: number) => void
}
