import { useState } from "react";
import BookListingItem from "./components/BookListItem";
import bookData from "./data.js";

const App = () => {
	const [bookList, setBookList] = useState(bookData);

	let bookDataTotal = bookList.length;

	function clearBookList () {
		setBookList([])
	}

	return (
		<div className="container">
			<div className="main-box">
				<h4 className="header">{bookDataTotal} total books</h4>
				{bookList.map((bookItem, id) => (
					<BookListingItem key={id} bookItemProps={bookItem} />
				))}
				<button className="book-submit" onClick={clearBookList}>Clear All</button>
			</div>
		</div>
	);
};

export default App;
