import * as repo from "./users.repo";

export function listUsers(skip?: number, take?: number) {
  return repo.list(skip, take);
}

export function getUser(id: number) {
  return repo.byId(id);
}

export function createUser(data: { email: string; name?: string }) {
  return repo.create(data);
}

export function updateUser(data: { name?: string }, id: number) {
  return repo.update(data, id);
}
