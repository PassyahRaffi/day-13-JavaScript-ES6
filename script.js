// console.log('Mulai')
// setTimeout(() => console.log('Loading'), 2000)
// console.log('Akhir')
// Output: Mulai → Akhir → Tengah (setelah 2 detik)

// console.log('Mulai')
// console.log('Loading')
// console.log('Akhir')

// function getData(callback) {
//   setTimeout(() => {
//     callback('Data sudah diterima')
//   }, 2000)
// }

// getData(result => console.log(result))

// const getData = new Promise((resolve, reject) => {
//   const success = null;
//   setTimeout(() => {
//     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//     success ? resolve('Berhasil!') : reject('Gagal!')
//   }, 2000)
// })

// getData.then(res => console.log(res)).catch(err => console.error(err))

// async function getUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     if (response.status == 200) {
//       const data = await response.json();
//       console.log("data ada berikut datanya = ", data);
//     } else {
//       console.log(response);
//     }

//   } catch (e) {
//     console.log(e, "Error");
//   }
// }

// getUser();

async function testCatch() {
  try {
    const response = await fetch("https://server-yang-tidak-ada.com/api");
    const data = await response.json();
    console.log("✅ TRY:", data);
  } catch (error) {
    console.error(error.message);
  }
}
testCatch();

async function testCatch() {
  fetch("https://server-yang-tidak-ada.com/api")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err.message));
}

// testCatch();
