import style from './Menu.module.css'

export default function Menu() {
    return(
        <div className={style['wrap-menu']}>
            <p>
                <a href={'/'}>Home</a>
            </p>
            <p>
                <a href={'/media'}>Média</a>
            </p>
            <p>
                <a href={'/zap'}>Zap</a>
            </p>
            <p>
                <a href={'/ReB'}>Rick and Morty</a>
            </p>
        </div>
    )
}