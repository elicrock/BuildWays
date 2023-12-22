export type ImageFile = {
  file: File | null | undefined;
  preview?: string;
};

export type Product = {
  id?: number;
  name: string;
  img?: File | string | null | undefined;
  categoryId?: number;
  price?: number;
  description?: string;
  selectedImageFile?: ImageFile;
  updatedAt?: string;
  createdAt?: string;
  parameters?: ParametersProduct[];
};

export interface ProductsData {
  count: number;
  products: Product[];
}

export interface ParametersProduct {
  title: string;
  description: string;
  index?: number;
}

export type ProductFormData = {
  name: string;
  price: number | string;
  categoryId: number | string;
  description?: string;
  img?: File | string | null | undefined;
  parameters?: ParametersProduct[];
};
