import './CreateProductForm.css';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreateProductMutation } from '../../../../Api/productApi';
import { ProductFormData } from '../../../../types/productType';
import usePosterFileInput from '../../../../hooks/usePosterFileInput';
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
  } = useForm<ProductFormData>({ mode: 'onChange' });

  const { selectedImageFile, handlePosterFileInputChange } = usePosterFileInput();
  const [createProduct] = useCreateProductMutation();
  const dispatch = useAppDispatch();
  const errorApi = useAppSelector(state => state.error.message);
  const myCategories = useAppSelector(state => state.categories);
  const [detail, setDetail] = useState([]);

  const addDetails = () => {
    setDetail([...detail, { title: '', description: '', number: Date.now() }]);
  };

  const deleteDetails = number => {
    setDetail(detail.filter(i => i.number !== number));
  };

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleAddProduct: SubmitHandler<ProductFormData> = async ({ name, price, categoryId, description }) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('categoryId', categoryId.toString());
      formData.append('price', price.toString());
      description && formData.append('description', description);
      selectedImageFile && formData.append('img', selectedImageFile?.file || '');

      await createProduct(formData).unwrap();

      handleCloseModal();
    } catch (error) {
      if (error.status === 409) {
        dispatch(setError('Продукт с таким названием уже существует'));
      } else {
        dispatch(setError('При создании продукта произошла ошибка'));
      }
    }
  };

  return (
    <form className="product-form" name="createProduct" onSubmit={handleSubmit(handleAddProduct)}>
      <div className="product-form__box">
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
            className="product-form__select"
            id="category"
            defaultValue=""
            {...register('categoryId', {
              required: 'Поле обязательно для заполнения',
            })}
          >
            <option value="" disabled>
              Выберите категорию
            </option>
            {myCategories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
      </div>
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
      <label className="product-form__label product-form__label-textarea" htmlFor="description">
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
      <button className="product-form__add-details" type="button" onClick={addDetails}>
        Добавить характеристику
      </button>
      {detail.map(i => (
        <div className="product-form__box" key={i.number}>
          <input
            className="product-form__input product-form__price"
            id="detail"
            placeholder="Характеристика"
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
          <span className="product-form__input_error">{errors?.price?.message}</span>
          <input
            className="product-form__input product-form__price"
            id="detailDescr"
            placeholder="Описание"
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
          <span className="product-form__input_error">{errors?.price?.message}</span>
          <button className="product-form__add-details" type="button" onClick={() => deleteDetails(i.number)}>
            Удалить
          </button>
        </div>
      ))}
      <input
        className="product-form__file"
        type="file"
        accept="image/*"
        id="inputFile"
        onChange={handlePosterFileInputChange}
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
