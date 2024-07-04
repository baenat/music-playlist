export interface ISongs {
  id: string,
  title: string,
  artists: {
    id: string,
    name: string
  }[],
  album : {
    id: string,
    name: string,
    imageUrl: string | undefined
  },
  time: string,
  duration?: number
}
