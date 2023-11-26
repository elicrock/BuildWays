import './CategoryItem.css';
import Image from '../../../../images/card-product__image.jpg';
import Modal from '../../../../components/Modal/Modal';
import Form from '../../../../components/Form/Form';
import Input from '../../../../components/Input/Input';
import InputFile from '../../../../components/InputFile/InputFile';

function CategoryItem() {
  const handleSubmit = () => {
    console.log('asfasf');
  };

  return (
    <li className="category-item">
      <div className="category-item__flex-box-up">
        <Modal classBtn="category-item__add-editBtn" titleModal="Редактирование категории">
          <Form nameForm="categoryItem" onSubmit={handleSubmit} submitBtnName="Сохранить">
            <Input type="text" inputId="inputName" placeholder="Название" />
            <InputFile />
            <button type="button" className="category-item__delete">
              Удалить
            </button>
          </Form>
        </Modal>
      </div>
      <img src={Image} alt="Изображение товара" className="category-item__image"></img>
      <h2 className="category-item__title">Эмаль Condor ПФ-115</h2>
    </li>
  );
}

export default CategoryItem;
