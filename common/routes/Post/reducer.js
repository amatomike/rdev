import * as types from '../../constants'

const initialState = {
  lastFetched: null,
  isLoading: false,
  error: null,
  title: '',
  content: '',
  Id: '',
  ShireKey: '',
  City: '',
  Photo300: '',
  PhotoLarge: '',
  PhotoThumb: '',
  PublicRemarks: '',
  StreetAddressOnly: '',
  ListPrice: '',
  BedsTotal: '',
  BathsTotal: '',
  MlsStatus: '',
  Latitude: '',
  Longitude: '',
  Zip: ''
}

export default function currentPost (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_POST_REQUEST:
      return { ...state,
        isLoading: true,
        error: null}
    case types.LOAD_POST_SUCCESS:
      return { ...state,
        title: action.payload.title,
        content: action.payload.content,
        lastFetched: action.meta.lastFetched,
        isLoading: false,
        Id: action.payload.Id,
        ShireKey: action.payload.ShireKey,
        City: action.payload.City,
        Photo300: action.payload.Photo300,
        PhotoLarge: action.payload.PhotoLarge,
        PhotoThumb: action.payload.PhotoThumb,
        PublicRemarks: action.payload.PublicRemarks,
        StreetAddressOnly: action.payload.StreetAddressOnly,
        ListPrice: action.payload.ListPrice,
        BedsTotal: action.payload.BedsTotal,
        BathsTotal: action.payload.BathsTotal,
        MlsStatus: action.payload.MlsStatus,
        Latitude: action.payload.Latitude,
        Longitude: action.payload.Longitude,
        Zip: action.payload.Zip
      }
    case types.LOAD_POST_FAILURE:
      return { ...state,
        error: action.payload }
    default:
      return state
  }
}

// Example of a co-located selector
export const selectCurrentPost = state => state.currentPost
