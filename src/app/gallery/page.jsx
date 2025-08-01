"use client"
import styles from '../gallery/Home.module.css';
import { useState } from 'react';

const images = [
    'https://github.com/itradebtc/liciaimages/blob/main/licia1.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia10.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia11.png?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia15.png?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia17.jpg?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia18.jpg?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia19.jpg?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia2.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia20.jpg?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia21.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia22.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia24.png?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia26.png?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia27.png?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia3.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia31.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia4.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia6.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia7.jpg?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia8.JPG?raw=true',
  
  // Add more image paths here
];

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>Hotel Gallery</h1>

        <div className={styles.grid}>
          {images.map((image, i) => (
            <section key={i} className={styles.imageContainer}>
              <image
                src={image}
                alt={`Hotel Image ${i + 1}`}
                onClick={() => handleImageClick(image)}
              />
            </section>
          ))}
        </div>

        {selectedImage && (
          <div className={`${styles.modalOverlay} onClick={handleCloseModal} z-50`} >
            <section className={styles.modal}>
              <span className={styles.close} onClick={handleCloseModal}>
                &times;
              </span>
              <image src={selectedImage} alt="Enlarged" />
            </section>
          </div>
        )}
      </main>

    </div>
  );
}

