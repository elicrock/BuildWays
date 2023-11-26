import './Categories.css';
import CategoryItem from './CategoryItem/CategoryItem';
import Modal from '../../../components/Modal/Modal';
import Form from '../../../components/Form/Form';
import Input from '../../../components/Input/Input';
import InputFile from '../../../components/InputFile/InputFile';

function Categories() {
  const handleSubmit = () => {
    console.log('asfasf');
  };
  return (
    <section className="categories">
      <div className="catagories__flex-box">
        <h2 className="categories__title">Категории товаров</h2>
        <Modal text={'Cоздать категорию'} classBtn="catagories__createBtn" titleModal="Создание категории">
          <Form nameForm="createCatagory" onSubmit={handleSubmit} submitBtnName="Создать">
            <Input type="text" inputId="inputName" placeholder="Название категории" />
            <InputFile />
          </Form>
        </Modal>
      </div>
      <ul className="categories__list">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </ul>
    </section>
  );
}

export default Categories;
