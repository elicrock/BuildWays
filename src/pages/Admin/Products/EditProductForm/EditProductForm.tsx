import { Product } from '../../../../types/productType';

type EditProductFormProps = {
  product: Product;
  submitBtnName?: string;
  handleCloseModal?: () => void;
};

function EditProductForm({ product, submitBtnName, handleCloseModal }: EditProductFormProps) {
  return <div>EditProductForm</div>;
}

export default EditProductForm;
