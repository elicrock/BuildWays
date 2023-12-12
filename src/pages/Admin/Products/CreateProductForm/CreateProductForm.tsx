import './CreateProductForm.css';
import { useState, useEffect, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreateCategoryMutation } from '../../../../Api/categoryApi';
import { CategoryFormData, ImageFile } from '../../../../types/categoryType';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { setError, clearError } from '../../../../redux/errorSlice';

type CreateProductFormProps = {
  submitBtnName?: string;
  handleCloseModal?: () => void;
};

function CreateProductForm({ submitBtnName, handleCloseModal }: CreateProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CategoryFormData>({ mode: 'onChange' });

  const [selectedImageFile, setSelectedImageFile] = useState<ImageFile>();
  const [createCatagory] = useCreateCategoryMutation();
  const dispatch = useAppDispatch();
  const errorApi = useAppSelector(state => state.error.message);
  const myCategories = useAppSelector(state => state.categories);

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
    <form className="product-form" name="createProduct" onSubmit={handleSubmit(handleAddCategory)}>
      <label className="product-form__label" htmlFor="nameProduct">
        Название
        <input
          className="product-form__input"
          id="nameProduct"
          placeholder="Товар"
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
        <span className="product-form__input_error">{errors?.name?.message}</span>
      </label>
      <label className="product-form__label" htmlFor="category">
        Категория
        <select
          className="product-form__input"
          id="category"
          // {...register('categoryId', {
          //   required: 'Поле обязательно для заполнения',
          // })}
        >
          <option value="" disabled selected>
            Выберите категорию
          </option>
          {myCategories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <span className="product-form__input_error">{errors?.categoryId?.message}</span>
      </label>
      <label className="product-form__label" htmlFor="price">
        Цена
        <div className="product-form__price-input-wrapper">
          <input
            className="product-form__input product-form__price"
            id="price"
            placeholder="Цена"
            type="number"
            {...register('price', {
              required: 'Поле обязательно для заполнения',
              min: {
                value: 0,
                message: 'Цена не может быть отрицательной',
              },
            })}
          />
          <span className="product-form__currency-icon">₽</span>
        </div>
        <span className="product-form__input_error">{errors?.price?.message}</span>
      </label>
      <label className="product-form__label" htmlFor="description">
        Описание товара (не обязательно)
        <textarea
          className="product-form__textarea"
          id="description"
          placeholder="Введите описание"
          {...register('description', {
            maxLength: {
              value: 1200,
              message: 'Описание должно содержать не более 1200 символов',
            },
            pattern: {
              value: /^[a-zA-Zа-яА-ЯёЁ\s!?"()\d]*$/,
              message: 'Вы ввели недопустимые символы',
            },
          })}
        ></textarea>
        <span className="product-form__input_error">{errors?.description?.message}</span>
      </label>
      <input
        className="product-form__file"
        type="file"
        accept="image/*"
        id="inputFile"
        onChange={handleImageFileInputChange}
      />
      {selectedImageFile ? <img className="product-form__image" src={selectedImageFile.preview} /> : null}
      <label htmlFor="inputFile" className="product-form__file-label">
        <span className="product-form__file-button-text">Добавить фото</span>
      </label>
      <div className="product-form__box-Btns">
        <button type="submit" className="product-form__submit-btn" disabled={!isValid}>
          {submitBtnName}
        </button>
      </div>
      <span className="product-form__error-api">{errorApi}</span>
    </form>
  );
}

export default CreateProductForm;
