import Header from '../Header/Header'

import './MainLayout.css'

export default function MainLayout(props) {
  return (
  <section className='MainLayout'>
    <Header/>
    <main>{props.children}</main>
  </section>
  )
}
