import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function ConfimationAlert({ open, setOpen }) {
  return (
    <>
      <Modal
        show={open.open}
        size='md'
        onClose={() =>
          setOpen({
            open: false,
            handleAction: undefined,
          })
        }
        popup>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              Apakah kamu yakin?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={open.handleAction}>
                {"Iya"}
              </Button>
              <Button
                color='gray'
                onClick={() =>
                  setOpen({
                    open: false,
                    handleAction: undefined,
                  })
                }>
                Batal
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
