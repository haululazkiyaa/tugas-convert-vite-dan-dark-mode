import PropTypes from "prop-types";

const MediaCard = (props) => {
  const { image, title, description } = props;
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full object-cover" />
      <div className="p-6">
        <h4 className="font-bold text-xl mb-2">{title}</h4>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

MediaCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MediaCard;
