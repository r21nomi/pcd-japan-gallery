import { ArtState } from '~/types/state'
import { Art } from '~/types/entity'
import { entityProvider } from '~/util/entityProvider'

export const state = (): ArtState => ({
  isLoading: false,
  items: [],
})

export const mutations = {
  setIsLoading(state: ArtState, isLoading: boolean) {
    state.isLoading = isLoading
  },
  setArts(state: ArtState, arts: Art[]) {
    state.items = arts
  },
  addArts(state: ArtState, arts: Art[]) {
    state.items.push(...arts)
  },
}

export const actions = {
  async fetch({ commit }): Promise<void> {
    commit('setIsLoading', true)
    const result = await (this as any).$axios
      .get(
        'https://script.google.com/macros/s/AKfycby6KFPQ1vP-zy53OKrZdYZXdneuybRB09BO61gUZ5WIDh_f0u2U7P2cBg/exec'
      )
      .catch((e) => {
        console.log(e)
      })
    commit('setIsLoading', false)

    const arts: Art = result.data.map((item: any) => {
      return entityProvider.getArt(item)
    })
    commit('addArts', arts)
  },
  clear({ commit }) {
    commit('setArts', [])
    commit('setIsLoading', false)
  },
}