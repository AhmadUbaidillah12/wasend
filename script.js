function kirimPesanMassal() {
  const nomorInput = document.getElementById('nomor').value.trim();
  const pesan = document.getElementById('pesan').value.trim();

  if (nomorInput === '' || pesan === '') {
    alert('Mohon isi semua field!');
    return;
  }

  const nomorList = nomorInput.split(',').map(n => n.trim()).filter(n => n !== '');

  nomorList.forEach(nomor => {
    const url = `https://wa.me/62${nomor}?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
  });
}
