import ShowCard from "../components/show/ShowCard";
import "./Home.css";

function Home() {
  return (
    <div className="show-card-row">
      {Array.from({ length: 8 }, (_, i) => (
        <ShowCard key={i} />
      ))}
    </div>
  );
}

export default Home;
