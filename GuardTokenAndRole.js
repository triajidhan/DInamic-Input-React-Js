// Berikut ini adalah contoh bagaimana mengimplementasikan route guard dalam aplikasi React menggunakan React Router 
// yang memeriksa keberadaan token autentikasi dan role user

import { useHistory, useLocation } from 'react-router-dom'

function PrivateRoute({ roles, children }) {
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'))

    if (!token || !roles.includes(user.role)) {
      history.replace('/login', {
        next: location.pathname
      })
    }
  }, [history, location, roles])

  return (
    <>
      {children}
    </>
  )
}

// Pada contoh ini, kita menggunakan hook useHistory dan useLocation dari React Router untuk mengakses objek history dan location.
// Kita juga menggunakan hook useEffect dari React untuk memeriksa keberadaan token autentikasi di local storage dan role user.
// Jika token tidak ada atau user tidak memiliki role yang termasuk dalam prop roles,
// user akan dialihkan ke halaman login dengan route saat ini disimpan sebagai route next di query string.
// Ini memungkinkan user untuk dialihkan kembali ke route yang dilindungi setelah login
// dengan sukses dan memiliki role yang diizinkan untuk mengakses route tersebut.

// Anda kemudian dapat menggunakan component PrivateRoute untuk mengelompokkan route
// yang hanya boleh diakses oleh user yang terautentikasi dengan role yang dibutuhkan:

import { Route } from 'react-router-dom'

<Route exact path="/protected" component={() => <PrivateRoute roles={['admin']}>Halaman Dilindungi</PrivateRoute>} />
