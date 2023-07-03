import styles from './SobreMim.module.css';
import PostModelo from "Componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre mim'
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Carolina!
            </h3>

            <img 
                src={fotoSobreMim}
                alt='Foto do Fulano sorrindo'
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>Seja bem-vinde, me chamo Carolina Farias Macioti, sou bacharela em Direito formada pela Universidade Federal de Pelotas/RS. </p>

            <p className={styles.paragrafo}>Atualmente, sou Desenvolvimento de Software especializada em Programação Front-end, qualificação adquirida através da iniciativa das empresas Oracle e Alura Educacional, criadoras do Projeto ORACLE NEXT EDUCATION, do qual fiz parte da Turma 4. </p>
            
            <p className={styles.paragrafo}>O breve relato a seguir, marca o início de uma nova perspectiva, isso em muitos aspectos, tendo em vista minha iminente transição de carreira, já que após inúmeras tentativas de permanecimento em minha antiga profissão, da qual guardo enorme carinho e orgulho, tanto pela trajetória que percorri durante os anos de graduação, quanto pelo período em que a exerci. </p>

            <p className={styles.paragrafo}>Entretanto, o gosto pela tecnologia, por criar algo do, absoluto, zero, o estudo dos conceitos e aplicá-los, sem falar no apêlo visuais do mundo do UX|UI Design, bem como do Desenvolvimento Front-end, ver a "magia" acontecer, tudo isso chamou mais alto. </p>

            <p className={styles.paragrafo}>Sendo assim, aqui estou eu, dando o "start" em minha nova trajetória de vida rumo à um futuro regado à enriquecimento intelectual e, espero, muita satisfação pessoal. </p>

            <p className={styles.paragrafo}>Portanto, torço para que decida seguir nesta jornada junto a mim, aprendendo muito e, é claro, colhendo os frutos que certamente todo o esforço trarão para nós (porque já o considero parte do meu time, subentendendo que escolheu ficar e ver tudo de perto), visto que aqui, pretendo compartilhar cada passo deste desafio que encaro com tanto gosto e dedicação. </p>

            <p className={styles.paragrafo}>Dito isso, reforço, fique por aqui e BORA CODAR MUITO. Espero que se divirta e aprenda bastante junto comigo!</p>

        </PostModelo>
    )
}