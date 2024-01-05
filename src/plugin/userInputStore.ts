import { defineStore } from 'pinia';

interface UserInputState {
  userName: string;
}

export const useUserInputStore = defineStore({
  id: 'userInput',
  state: (): UserInputState => ({
    userName: '',
  }),
  actions: {
    updateUserInput(newInput: string) {
      this.userName = newInput;
    },
  },
});
