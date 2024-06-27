import { ISongs } from "./ISongs";

export interface IPlaylist {
  id: string;
  name: string;
  imageUrl: string;
  music?: ISongs[]
}
