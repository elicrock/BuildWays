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
  selectedImageFile?: ImageFile;
  updatedAt?: string;
  createdAt?: string;
};
