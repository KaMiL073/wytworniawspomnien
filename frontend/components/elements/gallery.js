import PropTypes from 'prop-types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LaunchIcon from '@mui/icons-material/Launch';

import styles from './styles/modalPhoto.module.scss';

export default function Gallery({ activeImage, images, onClose }) {
  const [closeModal, setCloseModal] = useState(false);
  const [image, setImage] = useState(images.find((img) => img.id === activeImage));
  const index = images.indexOf(image);
  let nextItem = false;
  let prevItem = false;
  if (index < images.length - 1) {
    nextItem = images[index + 1];
  }
  if (index >= 0) {
    prevItem = images[index - 1];
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (closeModal) {
      onClose();
    }

    return () => {
      setCloseModal(false);
      document.body.style.overflow = 'unset';
    };
  });

  return (
    <div className={styles.overlay}>
      <div className={styles.photo}>
        <Image src={`${process.env.assetsPath + image.directus_files_id}`} layout="fill" objectFit="contain" alt="Gallery photo" />
      </div>
      <div
        className="text-white text-tiny mt-10 pr-4 cursor-pointer absolute right-0 top-0"
        onClick={() => setCloseModal(true)}
        onKeyPress={() => setCloseModal(true)}
        role="button"
        tabIndex={0}
      >
        <HighlightOffIcon />
      </div>
      <div
        className="text-white text-tiny mt-10 pr-4 cursor-pointer absolute left-0"
        onClick={() => prevItem && setImage(prevItem)}
        onKeyPress={() => prevItem && setImage(prevItem)}
        role="button"
        tabIndex={0}
      >
        <ArrowBackIosIcon />
      </div>
      <div
        className="text-white text-tiny mt-10 pr-4 cursor-pointer absolute right-0"
        onClick={() => nextItem && setImage(nextItem)}
        onKeyPress={() => nextItem && setImage(nextItem)}
        role="button"
        tabIndex={0}
      >
        <ArrowForwardIosIcon />
      </div>
      <div className="text-white text-tiny mt-10 pr-4 cursor-pointer absolute top-0">
        <a target="_blank" className={styles.btn} href={`${process.env.assetsPath + image.directus_files_id}`} rel="noreferrer">
          <div className="h-12">
            <LaunchIcon />
            {' '}
            Otwórz w wyższej rozdzielczości
          </div>
        </a>
      </div>
    </div>
  );
}

Gallery.propTypes = {
  activeImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    directus_files_id: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
  onClose: PropTypes.func.isRequired,
};
