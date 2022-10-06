import { SistemaRHPController } from "./controller/UserController";
import { UserRHPController } from "./controller/UserController";

export const Routes = [
  {
    method: "get",
    route: "/SistemaRHP",
    controller: SistemaRHPController,
    action: "all",
  },
  {
    method: "get",
    route: "/SistemaRHP/:id",
    controller: SistemaRHPController,
    action: "one",
  },
  {
    method: "post",
    route: "/SistemaRHP",
    controller: SistemaRHPController,
    action: "save",
  },
  {
    method: "put",
    route: "/SistemaRHP/:id",
    controller: SistemaRHPController,
    action: "update",
  },

  {
    method: "delete",
    route: "/SistemaRHP/:produto",
    controller: SistemaRHPController,
    action: "remove",
  },
  {
    method: "get",
    route: "/UserRHP",
    controller: UserRHPController,
    action: "all",
  },
  {
    method: "get",
    route: "/UserRHP/:cod",
    controller: UserRHPController,
    action: "one",
  },

  {
    method: "put",
    route: "/UserRHP/:cod",
    controller: UserRHPController,
    action: "update",
  },
  {
    method: "post",
    route: "/UserRHP",
    controller: UserRHPController,
    action: "save",
  },
  {
    method: "delete",
    route: "/UserRHP/:usuario",
    controller: UserRHPController,
    action: "remove",
  },
];
