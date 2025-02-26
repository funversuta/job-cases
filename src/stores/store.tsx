import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './mainpageslice';
import { modalSlice } from './modalslice';

// Настройка Redux store с использованием редьюсера счетчика
export const store = configureStore({
  reducer: {counter:counterSlice.reducer, modal: modalSlice.reducer}, // Используем редьюсер из слайса
});

// Выводим типы RootState и AppDispatch из store
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {counter: CounterState} (если у вас есть другие редьюсеры, добавьте их сюда)
export type AppDispatch = typeof store.dispatch;
