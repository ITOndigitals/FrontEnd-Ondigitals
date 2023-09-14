import { create } from "zustand";
import { createHeaderSlice } from "./slices/headerSlice";

export const useBoundStore = create((...a) => ({
  ...createHeaderSlice(...a),
}));