import React from "react";
import trafficCounterCameras from "../traffic-counter-cameras";
import { Link } from "react-router-dom";

class LatestSnapshot extends React.Component {
  constructor(props) {
    super(props);
    this.backgrounds = trafficCounterCameras.data.map(
      (item) => item.SnapshotSignedUrl
    );
    this.deviceId = trafficCounterCameras.data.map((item) => item.DeviceID);
    this.state = { backgroundIndex: 0 };

    this.changeBackground = this.changeBackground.bind(this);
  }

  componentDidMount() {
    this.timeout = setTimeout(
      this.changeBackground,
      this.props.animDuration * 1000
    );
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  changeBackground() {
    this.setState(
      function ({ backgroundIndex }) {
        const nextBackgroundIndex = ++backgroundIndex % this.backgrounds.length;

        return { backgroundIndex: nextBackgroundIndex };
      },
      function () {
        this.timeout = setTimeout(
          this.changeBackground,
          this.props.animDuration * 1000
        );
      }
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6 text-center">
            <div>
              <label className="text-secondary text-center">
                Latest Snapshot
              </label>
            </div>
            <Link
              to={`/image-grid/${this.deviceId[this.state.backgroundIndex]}`}
            >
              <img
                src={this.backgrounds[this.state.backgroundIndex]}
                className="img-fluid "
                alt="Responsive"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestSnapshot;
