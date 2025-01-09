import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

export default function Menu() {

    return (
        <header>
            <nav className={styles.navagacao}>
                <MenuLink to='/'>
                    Início
                </MenuLink>
                <MenuLink to='/sobremim'>
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}