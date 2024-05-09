// ActivityPage.js
import Navbar from "../Navbar/Navbar";
import "./ActivityPage.css";

const travelHistoryData = [
  {
    id: 1,
    destination: "New York",
    distance: 300,
    mode: "car",
    carbonEmission: 50,
  },
  {
    id: 2,
    destination: "Los Angeles",
    distance: 500,
    mode: "train",
    carbonEmission: 30,
  },
  {
    id: 3,
    destination: "Chicago",
    distance: 200,
    mode: "bus",
    carbonEmission: 20,
  },
  {
    id: 4,
    destination: "San Francisco",
    distance: 400,
    mode: "car",
    carbonEmission: 60,
  },
];

function ActivityPage() {
  return (
    <div>
      <Navbar />
      <div className="activityContainer">
        <div className="emissionTracker">
          <img src="/graph.png" alt="graph" />
          <p>Carbon Emission Tracker </p>
        </div>
        <div className="history">
          <table>
            <thead>
              <tr>
                <th>Destination</th>
                <th>Distance (km)</th>
                <th>Mode of Transport</th>
                <th>Carbon Emission (kg)</th>
              </tr>
            </thead>
            <tbody>
              {travelHistoryData.map((travel) => (
                <tr key={travel.id}>
                  <td>{travel.destination}</td>
                  <td>{travel.distance}</td>
                  <td>{travel.mode}</td>
                  <td>{travel.carbonEmission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
