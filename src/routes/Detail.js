import React from "react";
import "./Detail.css";
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const {
        state: { title, year, summary, poster, genres },
      } = location;
      return (
        <div className="detail__container">
          <img src={poster} alt={title} title={title} />
          <div>
            <h3>{title}</h3>
            <h5>{year}</h5>
            <ul>
              {genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
            <p>{summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
