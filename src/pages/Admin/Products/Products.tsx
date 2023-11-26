import './Products.css';
import Modal from '../../../components/Modal/Modal';
import Form from '../../../components/Form/Form';
import Input from '../../../components/Input/Input';
import InputFile from '../../../components/InputFile/InputFile';

function Products() {
  const handleSubmit = () => {
    console.log('asfasf');
  };

  return (
    <section className="products">
      <div className="catagories__flex-box">
        <h2 className="products__title">Все Товары??</h2>
        <Modal text={'Создать товар'} classBtn="products__createBtn" titleModal="Создание товара">
          <Form nameForm="createProduct" onSubmit={handleSubmit} submitBtnName="Создать">
            <Input labelName="Название" type="text" inputId="inputName" placeholder="Товар" />
            <Input labelName="Цена" type="text" inputId="inputPrice" placeholder="Цена" />
            <InputFile />
          </Form>
        </Modal>
      </div>
    </section>
  );
}

export default Products;
