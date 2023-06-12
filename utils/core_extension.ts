export function stringIsNullOrEmpty(value: any) {
  if (value === null || value === "") {
    return true;
  }
  return false;
}