export type ImageFile = {
  file: File | null | undefined;
  preview?: string;
};

export type Product = {
  id?: number;
  name: string;
  img?: File | string | null | undefined;
  selectedImageFile?: ImageFile;
  updatedAt?: string;
  createdAt?: string;
};
