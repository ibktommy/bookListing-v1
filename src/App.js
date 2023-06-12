import BookListingItem from './components/BookListItem';
import bookData from './data.js'

let bookDataTotal = bookData.length


const App = () => {
	return (
		<div className="container">
			<div className="main-box">
				<h4>{bookDataTotal} total books</h4>
				{
					bookData.map((bookItem, id) => (
						<BookListingItem key={id} bookItemProps={bookItem}/>
					))
				}
				<button className="submit">Clear All</button>
			</div>
		</div>
	);
};

export default App;
