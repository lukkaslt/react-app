import Book from './Book'

const BookList = ({ list }) =>
	<ul className="books">
		{list.map((book, i) =>
			<Book key={i} {...book}/>
		)}
	</ul>

export default BookList