export const createHeaderSlice = (set) => ({
  isDark: false,
  headerBtnIsShown: true,
  expanseMenuIsOpen: false,
  headerCanChangeColor: true,
  bottomNavIsShown: true,
  setToDark: () => set({ isDark: true }),
  setToLight: () => set({ isDark: false }),
  hideHeaderBtn: () => set({ headerBtnIsShown: false }),
  showHeaderBtn: () => set({ headerBtnIsShown: true }),
  setHeaderCanChangeColor: () => set({ headerCanChangeColor: true }),
  setHeaderCanNotChangeColor: () => set({ headerCanChangeColor: false }),
  setExpanseMenuIsOpen: (expanseState = false) =>
    set({ expanseMenuIsOpen: expanseState }),
  setBottomNavIsShown: (statePayload) =>
    set({ bottomNavIsShown: statePayload }),
});
