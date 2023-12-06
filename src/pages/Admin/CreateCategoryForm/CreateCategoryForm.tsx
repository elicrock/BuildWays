import './CreateCategoryForm.css';
import { useState, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreateCategoryMutation } from '../../../Api/categoryApi';
import { CategoryFormData, ImageFile } from '../../../types/categoryType';

type CreateCategoryFormProps = {
  submitBtnName?: string;
  deleteBtnName?: string;
  handleCloseModal?: () => void;
};

function CreateCategoryForm({ submitBtnName, deleteBtnName, handleCloseModal }: CreateCategoryFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CategoryFormData>({ mode: 'onChange' });

  const [selectedImageFile, setSelectedImageFile] = useState<ImageFile>();
  const [createCatagory] = useCreateCategoryMutation();

  const handleImageFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

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

  const handleAddCategory: SubmitHandler<CategoryFormData> = async ({ name }) => {
    // unwrap()
    try {
      const formData = new FormData();
      formData.append('name', name);
      if (selectedImageFile) {
        formData.append('img', selectedImageFile?.file || '');
      }
      const response = await createCatagory(formData);
      if ('error' in response) {
        if ('status' in response.error) {
          console.log(response.error.status);
        }
      }
      if ('data' in response && handleCloseModal) {
        handleCloseModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="category-form" name="createCatagory" onSubmit={handleSubmit(handleAddCategory)}>
      <label className="category-form__label" htmlFor="nameCategory">
        Название
        <input
          className="category-form__input"
          id="nameCategory"
          placeholder="Категория"
          type="text"
          {...register('name', {
            required: 'Поле обязательно для заполнения',
            minLength: {
              value: 2,
              message: 'Введите не менее 2 символов',
            },
            maxLength: {
              value: 30,
              message: 'Введите менее 30 символов',
            },
            pattern: {
              value: /^[a-zA-Z-0-9\u0430-\u044f\u0410-\u042fёЁ\s]*$/,
              message: 'Введите корректное имя',
            },
          })}
        />
        <span className="category-form__input_error">{errors?.name?.message}</span>
      </label>
      <input
        className="category-form__file"
        type="file"
        accept="image/*"
        id="inputFile"
        onChange={handleImageFileInputChange}
      />
      {selectedImageFile ? <img className="category-form__image" src={selectedImageFile.preview} /> : null}
      <label htmlFor="inputFile" className="category-form__file-label">
        <span className="category-form__file-button-text">Добавить фото</span>
      </label>
      <div className="category-form__box-Btns">
        <button type="submit" className="category-form__submit-btn" disabled={!isValid}>
          {submitBtnName}
        </button>
        {deleteBtnName && (
          <button type="submit" className="category-form__delete-btn">
            {deleteBtnName}
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateCategoryForm;
