export type CategoryFormData = {
  name: string;
  img?: File | null | undefined;
};

export type ImageFile = {
  file: File | null | undefined;
  preview?: string;
};

export type Category = {
  id?: number;
  name: string;
  img?: File | string | null | undefined;
  selectedImageFile?: ImageFile;
  updatedAt?: string;
  createdAt?: string;
};
