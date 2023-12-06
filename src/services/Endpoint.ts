export async function fetchMenu() {
  const response = await fetch(`https://tes-mobile.landa.id/api/menus`)
  const data = await response.json()
  return data
}
