import * as S from './styles'
import Burger from './Burger'

type Props = {
    children?:any
}

const Navbar = (props: Props) => {
    return (
        <div>
            <S.Nav>
                <S.Logo src={'https://carmenmihaela.com/logo/small_logo-removebg.png'} alt="Carmen Vernica logo" />
            </S.Nav>
            <Burger />
            {props.children}
        </div>
    )
}

export default Navbar

