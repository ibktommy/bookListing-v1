import { useState } from "react";
import BookListingItem from "./components/BookListItem";
import bookData from "./data.js";

const App = () => {
	const [bookList, setBookList] = useState(bookData);
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [image, setImage] = useState("");

	let bookDataTotal = bookList.length;

	// Function that deletes all book in the bookList
	function clearBookList() {
		setBookList([]);
	}

	// Function that checks for the book selected and deletes it from the bookList
	function deleteOneItem(index) {
		setBookList(bookList.filter((bookItem) => bookItem.id !== index));
	}

	function resetList() {
		setBookList(bookData);
	}

	function getTitle(e) {
		let titleValue = e.target.value.trim();
		setTitle(titleValue);
	}

	function getAuthor(e) {
		let authorValue = e.target.value.trim();
		setAuthor(authorValue);
	}

	function handleFormSubmit(e) {
		e.preventDefault();

		if (title === "" || author === "") {
			alert("Please fill the input fields");
			return;
		}

		let newBookItem = {
			title: title,
			author: author,
		};

		console.log(newBookItem);

		setBookList([newBookItem, ...bookList])

		setAuthor("")
		setTitle("")
	}

	return (
		<div className="container">
			<form id="book-form" onSubmit={handleFormSubmit}>
				<input
					type="text"
					name="book-title"
					id="book-title"
					placeholder="Book Title"
					value={title}
					onChange={getTitle}
				/>
				<input
					type="text"
					name="book-name"
					id="book-name"
					placeholder="Book Name"
					value={author}
					onChange={getAuthor}
				/>
				<input type="file" name="book-pic" id="book-pic" />
				<button className="form-button">Add Book</button>
			</form>

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
