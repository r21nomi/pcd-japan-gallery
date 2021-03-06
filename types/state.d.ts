import { Art } from '~/types/entity'

export interface RootState {
  version: string
}

export interface ArtState {
  isLoading: boolean
  items: Art[]
}

export interface ArtDetailState {
  isLoading: boolean
  art: Art
}
