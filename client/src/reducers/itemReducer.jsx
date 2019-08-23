import { types } from '../actions';

const initialState = {
  colors: [],
  isLoading: false,
  errors: null,
  isSuccess: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log('beforePayload', payload)
  switch (type) {

    case types.GET_ITEM_START:
      return {
        ...state,
        isLoading: true,
        errors: null
      };
    case types.GET_ITEM_SUCCESS:
      console.log("TCL:  action.payload",  payload)
      return {
        ...state,
        isLoading: false,
        errors: null,
        colors: payload,
      };
    case types.GET_ITEM_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload.err
      };

    case types.POST_ITEM_START:
      return {
        ...state,
        isLoading: true,
        errors: null
      };
    case types.POST_ITEM_SUCCESS:
      const updatedPOSTEquipmentITEM = [...state.equipment, payload];
      return {
        ...state,
        isLoading: false,
        errors: null,
        colors: updatedPOSTEquipmentITEM,
        isSuccess: true
      };
    case types.POST_ITEM_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload,
        isSuccess: false
      };

    case types.PUT_ITEM_START:
      return {
        ...state,
        isLoading: true,
        errors: null
      };
    case types.PUT_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        equipment: payload,
        isSuccess: true
      };
    case types.PUT_ITEM_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload,
        isSuccess: false
      };

    case types.DELETE_START:
      return {
        ...state,
        isLoading: true,
        errors: null
      };

    case types.DELETE_SUCCESS:
      const updatedEquipment = state.equipment.filter(
        item => item.id !== payload
      );
      return {
        ...state,
        isLoading: false,
        errors: null,
        equipment: updatedEquipment
      };

    case types.DELETE_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    default:
      return state;
  }
};
