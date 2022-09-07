import Header from '../Header/Header'

import './Layout.css'

export default function Layout(props) {
  return (
  <section className='Layout'>
    <Header/>
    <main>{props.children}</main>
  </section>
  )
}
