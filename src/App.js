import { useState } from "react";
import BookListingItem from "./components/BookListItem";
import bookData from "./data.js";

const App = () => {
	const [bookList, setBookList] = useState(bookData);

	let bookDataTotal = bookList.length;

	// Function that deletes all book in the bookList
	function clearBookList () {
		setBookList([])
	}

	// Function that checks for the book selected and deletes it from the bookList
	function deleteOneItem (index) {
		setBookList(bookList.filter((bookItem) => bookItem.id !== index))
	}

	function resetList() {
		setBookList(bookData);
	}

	return (
		<div className="container">
			<div className="main-box">
				<h4 className="header">{bookDataTotal} total books</h4>
				{bookList.map((filteredBookItem, id) => (
					<BookListingItem
						key={id}
						bookItemProps={filteredBookItem}
						id={id}
						deleteItemProps={deleteOneItem}
					/>
				))}

				{bookList.length === 0 ? (
					<button className="reset-btn" onClick={resetList}>
						reset
					</button>
				) : (
					<button className="book-submit" onClick={clearBookList}>
						Clear All
					</button>
				)}
			</div>
		</div>
	);
};

export default App;
