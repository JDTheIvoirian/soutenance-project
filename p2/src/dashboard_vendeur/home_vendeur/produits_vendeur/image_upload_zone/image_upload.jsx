import React, { useState } from "react";
import '../image_upload_zone/image_upload.css';

const ImageUpload = () => {
    const [images, setImages] = useState([]);

  // Fonction pour gérer le changement de fichier
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });

    // Ajouter les nouvelles images à celles existantes
    Promise.all(newImages).then(imgUrls => setImages((prevImages) => [...prevImages, ...imgUrls]));
  };

  // Fonction pour supprimer une image par index
  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };
    return(
        <div className="multiple-image-upload-container">
            {/* Champ pour uploader plusieurs images */}
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="upload-button"
            />

            {/* Affichage des images téléchargées */}
            <div className="image-grid">
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <div key={index} className="image-item">
                            <img src={image} alt={`Uploaded ${index}`} className="uploaded-image" />
                            <button onClick={() => handleRemoveImage(index)} className="remove-button">Remove</button>
                        </div>
                    ))
                ) : (
                    <div className="image-placeholder">No images uploaded. Please upload images.</div>
                )}
            </div>
        </div>
    );
}

export default ImageUpload;