import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "@/types/token";

interface TokenState {
  tokens: Token[];
}

const initialState: TokenState = {
  tokens: [],
};

const tokenSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    updatePrice(
      state,
      action: PayloadAction<{ id: string; price: number }>
    ) {
      const token = state.tokens.find(t => t.id === action.payload.id);
      if (token) token.price = action.payload.price;
    },
    setTokens(state, action: PayloadAction<Token[]>) {
      state.tokens = action.payload;
    },
  },
});

export const { updatePrice, setTokens } = tokenSlice.actions;
export default tokenSlice.reducer;
