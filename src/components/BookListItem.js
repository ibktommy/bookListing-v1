const BookListingItem = ({bookItemProps}) => {
  const { title, author, image } = bookItemProps

	return (
		<article className="book-article">
			<div className="book-image">
				<img src={image} alt={title} />
			</div>
      
			<div className="book-info">
        <h4 className="book-title">{title}</h4>
        <p className="book-author">{author}</p>
      </div>
		</article>
	);
};

export default BookListingItem;
