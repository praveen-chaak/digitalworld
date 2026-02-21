const officeImages = [
  'ms office/Project24-600x602.png',
  'ms office/office2021_nologo-500x500-1.jpg',
  'ms office/HB19-Mac-300x300.png',
  'ms office/off-2016-1000-600x600.png',
  'ms office/2019-600x600.png',
  'ms office/Visio24-300x300.png',
  'ms office/visio-2021-300x300.jpg',
  'ms office/Screenshot-2024-10-14-171128-600x602.png',
]

const windowsImages = [
  'windows/Windows11h_act-1-600x600.png.webp',
  'windows/w10-1-600x600-1.png',
  'windows/w11-pro-dvd-300x300.png.webp',
  'windows/win10-OEM-300x300.jpg',
  'windows/win10-pro-oem-300x300.png.webp',
  'windows/win11-OEM-300x300.png.webp',
  'windows/home-300x300.jpg.webp',
  'windows/ChatGPT-Image-Apr-11-2025-08_57_40-AM-600x600.png',
]

const serverImages = [
  'win server/Microsoft-Windows-Server-2022-Standard-600x600.jpg.webp',
  'win server/server-2019-box-300x300.jpg',
  'win server/windows-server-2025-dvd-pack-scaled-1-300x300.jpg',
  'win server/windows-server-2025-rds-50-user-CAL-600x600.png',
  'win server/windows-server-2019-standard_6tfu-tv.jpg.webp',
  'win server/rds-2022-300x300.jpg.webp',
  'win server/server-datacenter-600x600-1.png',
  'win server/Win-server25-device-50-CAL-600x600.png',
]

function toPublicUrl(path) {
  return encodeURI(`/${path}`)
}

function pick(pool, seed, count = 4) {
  const result = []
  const start = seed % pool.length
  for (let i = 0; i < count; i += 1) {
    result.push(toPublicUrl(pool[(start + i) % pool.length]))
  }
  return result
}

export function getProductImages(product) {
  if (product.categorySlug === 'windows-server') {
    return pick(serverImages, product.id)
  }
  if (product.categorySlug === 'windows-desktop') {
    return pick(windowsImages, product.id)
  }
  return pick(officeImages, product.id)
}
