import produce from "immer";
const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state: any = INITIAL_STATE, action: any) {
  return produce(
    state,(draft: { loading: boolean; token: null; signed: boolean; }) => {
      switch (action.type) {
        case "@auth/SIGN_IN_REQUEST": {
          draft.loading = true;
          break;
        }
        case "@auth/SIGN_IN_SUCCESS": {
          draft.token = action.payload.token;
          draft.signed = true;
          draft.loading = false;
          break;
        }
        case "@auth/SIGN_FAILURE": {
          draft.loading = false;
          break;
        }
        case "@auth/SIGN_OUT": {
          draft.token = null;
          draft.signed = false;
          break;
        }
        default:
      }
    }
  );
}
