import BooksList from './BooksList'
import Oracoes from './Oracoes'

const Saint = ({ nome, livros, oracoes }) =>
	<section id={nome.toLowerCase().replace(/ /g, '-')}>
		<h1>{nome}</h1>
    <BooksList list={books} />
    <Oracoes title="Orações" oracoes={oracoes} />
	</section>

export default Saint