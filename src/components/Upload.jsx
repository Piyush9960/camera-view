// import React from "react";

// const Upload = () => {
//   return (
//     <div className="container my-4">
//       <div className="row">
//         <div className="col-md-12">
//           <button className="btn btn-primary float-right">Upload</button>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import ImageUploading from "react-images-uploading";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// import "./styles.css";

function Upload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <div className="container my-4">
          <div className="row">
            <div className="col-md-12">
              <button
                onClick={handleOpen}
                className="btn btn-primary float-right"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div className="App">
                <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      <button
                        style={isDragging ? { color: "red" } : null}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        <div className="drag-and-drop-div">
                          Click to select <br />
                          <span className="text-secondary">or drag here </span>
                        </div>
                      </button>
                      &nbsp;
                      {imageList.length > 0 && (
                        <div className="container">
                          <div className="row">
                            <button
                              className="btn btn-danger my-4"
                              onClick={onImageRemoveAll}
                            >
                              Remove all images
                            </button>
                          </div>
                        </div>
                      )}
                      {imageList.map((image, index) => (
                        <div key={index} className="container">
                          <div className="row">
                            <div className="col-6">
                              <img src={image.data_url} alt="" width="100" />
                              <div className="image-item__btn-wrapper">
                                <button onClick={() => onImageUpdate(index)}>
                                  Update
                                </button>
                                <button onClick={() => onImageRemove(index)}>
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default Upload;
