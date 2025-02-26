import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Интерфейс состояния счетчика
export interface CounterState {
  value: number;
}

// Начальное состояние счетчика
const initialState: CounterState = {
  value: 0,
};

// Создание слайса для счетчика
export const counterSlice = createSlice({
  name: 'counter', // Имя слайса
  initialState, // Начальное состояние
  reducers: {
    increment: (state) => {
      // Увеличиваем значение на 1
      state.value += 1;
    },
    decrement: (state) => {
      // Уменьшаем значение на 1
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // Увеличиваем значение на заданное количество
      state.value += action.payload;
    },
  },
});

// Генерация создателей действий для каждого редьюсера
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Экспорт редьюсера по умолчанию
export default counterSlice.reducer;
