import BookListingItem from './components/BookListItem';
import bookData from './data.js'

const App = () => {
	return (
		<div className="container">
			<div className="main-box">
				{
					bookData.map((bookItem, id) => (
						<BookListingItem key={id} bookItemProps={bookItem}/>
					))
				}
			</div>
		</div>
	);
};

export default App;
