export interface ModalCreate {
    open: boolean;
    slug: string;
    title: string;
    handleClose: (open: boolean) => void;
}
