import image from '../assets/News.jpg'

const NewsItem = ({ title, description, src, url }) => {
    return (
        
		<div className="card bg-dark text-light mb-2 d-inline-block my-5 mx-1 px-2 py-2" style={{ maxWidth:"259px"}}>
			<img src={src?src:image} className="card-img-top" alt="image" style={{height:"230px", weight:"260px"}} />
			<div className="card-body">
				<h5 className="card-title">{title?title.slice(0,50):"Title about the news"}</h5>
				<p className="card-text">{description?description.slice(0,90):"description about the news happening all around you"}</p>
				<a href={url} className="btn btn-primary">
					Read More..
				</a>
			</div>
		</div>        
	);
};

export default NewsItem;
