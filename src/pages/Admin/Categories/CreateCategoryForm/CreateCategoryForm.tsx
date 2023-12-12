import './CreateCategoryForm.css';
import { useState, useEffect, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreateCategoryMutation } from '../../../../Api/categoryApi';
import { CategoryFormData, ImageFile } from '../../../../types/categoryType';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { setError, clearError } from '../../../../redux/errorSlice';

type CreateCategoryFormProps = {
  submitBtnName?: string;
  handleCloseModal?: () => void;
};

function CreateCategoryForm({ submitBtnName, handleCloseModal }: CreateCategoryFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CategoryFormData>({ mode: 'onChange' });

  const [selectedImageFile, setSelectedImageFile] = useState<ImageFile>();
  const [createCatagory] = useCreateCategoryMutation();
  const dispatch = useAppDispatch();
  const errorApi = useAppSelector(state => state.error.message);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

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
    try {
      const formData = new FormData();
      formData.append('name', name);
      if (selectedImageFile) {
        formData.append('img', selectedImageFile?.file || '');
      }
      await createCatagory(formData).unwrap();
      handleCloseModal();
    } catch (error) {
      if (error.status === 409) {
        dispatch(setError('Категория с таким названием уже существует'));
      } else {
        dispatch(setError('При создании категории произошла ошибка'));
      }
    }
  };

  return (
    <form className="category-form" name="editCatagory" onSubmit={handleSubmit(handleAddCategory)}>
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
      </div>
      <span className="category-form__error-api">{errorApi}</span>
    </form>
  );
}

export default CreateCategoryForm;
