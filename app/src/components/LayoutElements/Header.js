
import { Image } from '../../components'
import Logo from '../../assets/images/logo.png'

export default function Header(){
  return(
    <header className="container is-flex is-justify-content-center my-6">
      <Image
        src={Logo}
        alt="Logo"
      />
    </header>
  )
}