import { LocationType } from "./enum";

export const allCourse = {
  id: 999999,
  code: "ALL-COURSE",
  name: "All",
  locationType: LocationType.offline,
};

export const allSetting = {
  id: 888888,
  name: "All",
  locationType: "",
  room: { id: 0, title: "", code: "ALL-CLASS-ROOM" },
  branch: { id: 0, title: "title", code: "code", address: "address" },
};
