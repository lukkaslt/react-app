const Book = ({nome, paginas, ano}) =>
	<li>
		<span className="nome">{nome}</span>
    <span className="paginas">{paginas}</span>
    <span className="ano">{ano}</span>
	</li>
export default Book