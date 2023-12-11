import './EditCategoryForm.css';
import { useState, useEffect, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDeleteCategoryMutation, useEditCategoryMutation } from '../../../../Api/categoryApi';
import { Category } from '../../../../types/categoryType';
import { CategoryFormData, ImageFile } from '../../../../types/categoryType';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { setError, clearError } from '../../../../redux/errorSlice';
import { updateCategory } from '../../../../redux/categorySlice';

type EditCategoryFormProps = {
  category: Category;
  submitBtnName?: string;
  handleCloseModal?: () => void;
};

function EditCategoryForm({ category, submitBtnName, handleCloseModal }: EditCategoryFormProps) {
  const srcImage = `http://localhost:3000/${category.img}`;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<CategoryFormData>({ mode: 'onChange' });

  const [selectedImageFile, setSelectedImageFile] = useState<ImageFile>();
  const [imageSelected, setImageSelected] = useState(false);
  const [deleteCategory] = useDeleteCategoryMutation();
  const [editCategory] = useEditCategoryMutation();
  const dispatch = useAppDispatch();
  const errorApi = useAppSelector(state => state.error.message);

  useEffect(() => {
    if (category.name) {
      setValue('name', category?.name || '');
    }
  }, [category, setValue]);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleImageFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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

  const handleEditCategory: SubmitHandler<CategoryFormData> = async ({ name }) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      if (selectedImageFile) {
        formData.append('img', selectedImageFile?.file || '');
      }
      const response = await editCategory({ formData, id: category.id }).unwrap();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      dispatch(updateCategory(response.category));
      handleCloseModal();
    } catch (error) {
      if (error.status === 409) {
        dispatch(setError('Категория с таким названием уже существует'));
      } else {
        dispatch(setError('При создании категории произошла ошибка'));
      }
    }
  };

  const handleDeleteCategory = async (id: number) => {
    try {
      await deleteCategory(id).unwrap();
      handleCloseModal();
    } catch (error) {
      dispatch(setError('Произошла ошибка при удалении'));
    }
  };

  return (
    <form className="category-form" name="createCatagory" onSubmit={handleSubmit(handleEditCategory)}>
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
      {selectedImageFile ? (
        <img className="category-form__image" src={selectedImageFile.preview} />
      ) : (
        <img className="category-form__image" src={srcImage} alt="Category" />
      )}
      <label htmlFor="inputFile" className="category-form__file-label">
        <span className="category-form__file-button-text">Добавить фото</span>
      </label>
      <div className="category-form__box-Btns">
        <button type="submit" className="category-form__submit-btn" disabled={!isValid && !imageSelected}>
          {submitBtnName}
        </button>
        <button type="button" className="category-form__delete-btn" onClick={() => handleDeleteCategory(category.id)}>
          Удалить
        </button>
      </div>
      <span className="category-form__error-api">{errorApi}</span>
    </form>
  );
}

export default EditCategoryForm;
