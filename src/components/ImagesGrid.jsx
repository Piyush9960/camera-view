import React from "react";
import trafficCounterCameras from "../traffic-counter-cameras";
import Gallery from "react-grid-gallery";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import GrainIcon from "@material-ui/icons/Grain";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const ImagesGrid = () => {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();
  const imageId = params.id;

  function handleClick(event) {
    event.preventDefault();
    // console.info('You clicked a breadcrumb.', event);
    history.push("/");
  }

  const imagesToShow = () => {
    let IMAGES = [];
    for (let { SnapshotSignedUrl, CameraType, DeviceID, Tags } of trafficCounterCameras.data) {
      IMAGES.push({
        src: SnapshotSignedUrl,
        thumbnail: SnapshotSignedUrl,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: CameraType,
        isSelected: DeviceID === imageId,
        tags: Tags.map((item) => { return {value: item, title: item}})
      });
    }
    return IMAGES;
  };


  return (
    <div className="container mt-4">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          href="/"
          onClick={handleClick}
          className={classes.link}
        >
          <HomeIcon className={classes.icon} />
          Home
        </Link>

        <Typography color="textPrimary" className={classes.link}>
          <GrainIcon className={classes.icon} />
          Image-grid
        </Typography>
      </Breadcrumbs>

      <div className="mt-5">
        <h4>Image Grid :</h4>
        <Gallery images={imagesToShow()}  />
      </div>
    </div>
  );
};

export default ImagesGrid;
