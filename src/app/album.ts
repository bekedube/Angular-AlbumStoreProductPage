
import { Track } from './track';

export interface Album {
  name: string,
  releaseDAte: string,
  coverImage: string,
  tracks: Track[],
}
