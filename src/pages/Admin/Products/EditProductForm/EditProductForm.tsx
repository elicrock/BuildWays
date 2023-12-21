import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Product, ProductFormData } from '../../../../types/productType';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { useDeleteProductMutation, useEditProductMutation } from '../../../../Api/productApi';
import usePosterFileInput from '../../../../hooks/usePosterFileInput';
import AddDetailsProduct from '../AddDetailsProduct/AddDetailsProduct';
import { setError, clearError } from '../../../../redux/errorSlice';
import { updateProduct } from '../../../../redux/productSlice';

type EditProductFormProps = {
  product: Product;
  submitBtnName?: string;
  handleCloseModal?: () => void;
};

function EditProductForm({ product, submitBtnName, handleCloseModal }: EditProductFormProps) {
  const srcImage = `http://localhost:3000/${product.img}`;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<ProductFormData>({ mode: 'onChange' });

  const { selectedImageFile, imageSelected, handlePosterFileInputChange } = usePosterFileInput();
  const [deleteProduct, { isLoading: isLoadingDelete }] = useDeleteProductMutation();
  const [editProduct, { isLoading }] = useEditProductMutation();
  const dispatch = useAppDispatch();
  const myCategories = useAppSelector(state => state.categories);
  const errorApi = useAppSelector(state => state.error.message);

  useEffect(() => {
    setValue('name', product?.name || '');
    setValue('categoryId', product?.categoryId || '');
    setValue('price', product?.price || '');
    setValue('description', product?.description || '');
  }, [product, setValue]);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleEditProduct: SubmitHandler<ProductFormData> = async ({ name, price, categoryId, description }) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('categoryId', categoryId.toString());
      formData.append('price', price.toString());
      description && formData.append('description', description);
      selectedImageFile && formData.append('img', selectedImageFile?.file || '');

      const response = await editProduct({ formData, id: product.id }).unwrap();

      dispatch(updateProduct(response));
      handleCloseModal();
    } catch (error) {
      if (error.status === 409) {
        dispatch(setError('Товар с таким названием уже существует'));
      } else {
        dispatch(setError('При редактировании товара произошла ошибка'));
      }
    }
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      await deleteProduct(id).unwrap();
      handleCloseModal();
    } catch (error) {
      dispatch(setError('Произошла ошибка при удалении'));
    }
  };

  // const changeInfo = (key,value, number) => {
  //     setDetails(details.map(i => i.number === number ? {...i, [key]: value} : i))
  // }

  return (
    <form className="product-form" name="createProduct" onSubmit={handleSubmit(handleEditProduct)}>
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
      <AddDetailsProduct />
      <input
        className="product-form__file"
        type="file"
        accept="image/*"
        id="inputFile"
        onChange={handlePosterFileInputChange}
      />
      {selectedImageFile ? (
        <img className="product-form__image" src={selectedImageFile.preview} />
      ) : (
        <img className="product-form__image" src={srcImage} alt="Product" />
      )}
      <label htmlFor="inputFile" className="product-form__file-label">
        <span className="product-form__file-button-text">Добавить фото</span>
      </label>
      <div className="product-form__box-Btns">
        <button type="submit" className="product-form__submit-btn" disabled={!isValid && !imageSelected}>
          {submitBtnName}
        </button>
        <button
          type="button"
          className="product-form__delete-btn"
          onClick={() => handleDeleteProduct(product.id)}
          disabled={isLoading || isLoadingDelete}
        >
          Удалить
        </button>
      </div>
      <span className="product-form__error-api">{errorApi}</span>
    </form>
  );
}

export default EditProductForm;
