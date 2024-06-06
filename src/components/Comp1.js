import React from 'react';
import "./Comp1.css"
const Comp1 = ({ photos, currentPhotoIndex, nextPhoto, prevPhoto, setCurrentPhotoIndex }) => {
    return (
        <div>
            {photos.length > 0 && (
                <div>
                    <button onClick={prevPhoto}>{'<'}</button>
                    <img  src={photos[currentPhotoIndex]} alt="carousel" />
                    <button onClick={nextPhoto}>{'>'}</button>
                </div>
            )}
            <div>
                {photos.map((photo, index) => (
                    <img className="miniPhoto"
                        key={index}
                        src={photo}
                        alt={`thumbnail-${index}`}
                        style={{ border: index === currentPhotoIndex ? '4px solid green' : 'none' }}
                        onClick={() => setCurrentPhotoIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comp1;
