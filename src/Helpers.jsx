// scroll to top
export function onTop() {
  window.scrollTo(0, 0);
}

// convert to IDR format
export function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(angka);
}
