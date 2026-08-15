import "./ShowCard.css";

const circleSVG = (
  <span className="genre-entry">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
    </svg>
  </span>
);

var genres = ["Drama", "Horror", "Humour"];

function ShowCard() {
  return (
    <div className="show-card">
      <div className="show-card__poster">
        <img src="/vertical_placeholder.png" />
      </div>
      <div className="text-box-show-card">
        <h2 className="show-card__title">Title</h2>
        <div className="genres-list">
          {genres.flatMap((g, i) =>
            i ? [circleSVG, <small>{g}</small>] : [<small>{g}</small>],
          )}
        </div>
        <p className="show-card__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          earum aperiam, aliquid cupiditate quaerat rem rerum beatae praesentium
          placeat expedita et. Voluptas voluptatum, dolore fugit error amet odio
          reprehenderit quibusdam!
        </p>
      </div>
    </div>
  );
}

export default ShowCard;
