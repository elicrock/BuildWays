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
};

export interface ProductsData {
  count: number;
  rows: Product[];
}

export type ProductFormData = {
  name: string;
  price: number | string;
  categoryId: number | string;
  description?: string;
  img?: File | string | null | undefined;
  parameters?: {
    title: string;
    description: string;
  };
};
