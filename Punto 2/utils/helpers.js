export function uniqueEmail(prefix = 'user') {
  return `${prefix}${Date.now()}@test.com`;
}