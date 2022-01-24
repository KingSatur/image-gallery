import React, { useState } from 'react';

export const ImageForm = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState('');

  const handleSubmit = function (e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', title);
  };

  return (
    <div className="col-md-4 offset-md-4">
      <div className="card bg-dark text-light rounded-0 p-4">
        <div className="card-body">
          <h3>Upload an Image</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Introduce image title"
              className="form-control bg-dark text-light my-3 rounded-0"
            />
            <input
              type="file"
              onChange={(e) => setFile(e.target.files.item(0))}
              className="form-control bg-dark text-light my-3 rounded-0"
            />
            <div className="my-3">
              <button className="btn btn-success rounded-0 w-100" type="submit">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
