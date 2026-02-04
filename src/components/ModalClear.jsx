import {IoIosClose} from 'react-icons/io'
import {useEffect} from 'react'

function ModalClear({onClose, onClear}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="relative border-accent bg-primary rounded-lg p-6 min-w-[280px]"
      >
        <div className="flex absolute right-2 top-1">
          <button
            onClick={onClose}
            className="cursor-pointer"
          >
            <IoIosClose className="text-2xl text-gray-700" />
          </button>
        </div>
        <h2 className="my-4 text-center">
          Are you sure that you want to clear your grocery list?
        </h2>
        <div className="flex justify-center gap-10">
          <button
            onClick={onClear}
            className="cursor-pointer border border-accent/50 text-gray-800 hover:border-warning  hover:bg-warning hover:text-white transition rounded-lg px-6 py-2"
          >
            Clear
          </button>
          <button
            onClick={onClose}
            className="cursor-pointer border border-accent/50 text-gray-800 hover:border-action  hover:bg-action hover:text-white transition rounded-lg px-6 py-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalClear