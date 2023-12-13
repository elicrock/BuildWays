import { useState, ChangeEvent } from 'react';
import { ImageFile } from '../types/categoryType';

const usePosterFileInput = () => {
  const [selectedImageFile, setSelectedImageFile] = useState<ImageFile>();
  const [imageSelected, setImageSelected] = useState(false);

  const handlePosterFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImageSelected(true);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newFile: ImageFile = {
          file: file,
          preview: reader.result as string,
        };
        setSelectedImageFile(newFile);
      };
      reader.readAsDataURL(file);
    }
  };

  return { selectedImageFile, setSelectedImageFile, handlePosterFileInputChange, imageSelected };
};

export default usePosterFileInput;
