import { tokenApi } from "@api/index";

export const todoApi = {
  createToDo: async (payload: { todo: string }) => {
    return await tokenApi.post("/todos", payload);
  },
  getToDos: async () => {
    return await tokenApi.get("/todos");
  },
  updateToDo: async ({
    id,
    todo,
    isCompleted,
  }: {
    id: string;
    todo: string;
    isCompleted: boolean;
  }) => {
    return await tokenApi.put(`/todos/${id}`, { todo, isCompleted });
  },
  deleteToDo: async ({ id }: { id: string }) => {
    return await tokenApi.delete(`/todos/${id}`);
  },
};
