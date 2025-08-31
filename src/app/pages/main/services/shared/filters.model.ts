export enum FilterOption {
  Default,
  lowToHigh,
  highToLow,
  topRated,
}

export const filterLabels = {
  [FilterOption.Default]: 'Popular',
  [FilterOption.lowToHigh]: 'Price: low to high',
  [FilterOption.highToLow]: 'Price: high to low',
  [FilterOption.topRated]: 'Top rated first',
};
