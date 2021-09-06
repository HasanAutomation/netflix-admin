import { useState } from 'react';
import firebase from '../../firebase';
import './AddMovie.css';

export default function NewMovie() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const handleChange = e => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const upload = (items = []) => {
    const { getStorage, getDownloadURL, ref, uploadBytesResumable } = firebase;

    const storage = getStorage();
    let storageRef;
    let uploadTask;

    items.forEach(item => {
      const fileName = `new-item-${Date.now()}-${item.file.name}`;
      storageRef = ref(storage, `/items/${fileName}`);
      uploadTask = uploadBytesResumable(storageRef, item.file);
      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        err => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(uri => {
            setMovie(prev => ({ ...prev, [item.label]: uri }));
            setUploaded(prev => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = e => {
    e.preventDefault();
    upload([
      { file: img, label: 'image' },
      { file: imgTitle, label: 'imageTitle' },
      { file: imgSm, label: 'imageThumbnail' },
      { file: trailer, label: 'trailer' },
      { file: video, label: 'video' },
    ]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(movie);
  };

  return (
    <div className='newProduct'>
      <h1 className='addProductTitle'>New Movie</h1>
      <form className='addProductForm'>
        <div className='addProductItem'>
          <label>Image</label>
          <input
            type='file'
            id='img'
            name='img'
            onChange={e => setImg(e.target.files[0])}
          />
        </div>
        <div className='addProductItem'>
          <label>Title image</label>
          <input
            type='file'
            id='imgTitle'
            name='imgTitle'
            onChange={e => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className='addProductItem'>
          <label>Thumbnail image</label>
          <input
            type='file'
            id='imgSm'
            name='imgSm'
            onChange={e => setImgSm(e.target.files[0])}
          />
        </div>
        <div className='addProductItem'>
          <label>Title</label>
          <input
            type='text'
            placeholder='John Wick'
            name='title'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Description</label>
          <input
            type='text'
            placeholder='description'
            name='desc'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Year</label>
          <input
            type='text'
            placeholder='Year'
            name='year'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Genre</label>
          <input
            type='text'
            placeholder='Genre'
            name='genre'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Duration</label>
          <input
            type='text'
            placeholder='Duration'
            name='duration'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Limit</label>
          <input
            type='text'
            placeholder='limit'
            name='limit'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Is Series?</label>
          <select name='isSeries' id='isSeries' onChange={handleChange}>
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
        </div>
        <div className='addProductItem'>
          <label>Trailer</label>
          <input
            type='file'
            name='trailer'
            onChange={e => setTrailer(e.target.files[0])}
          />
        </div>
        <div className='addProductItem'>
          <label>Video</label>
          <input
            type='file'
            name='video'
            onChange={e => setVideo(e.target.files[0])}
          />
        </div>
        {uploaded === 5 ? (
          <button className='addProductButton' onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className='addProductButton' onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
}
